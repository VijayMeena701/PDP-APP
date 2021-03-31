import { db, auth } from '../../firebase';

const config = {
    apiKey: "AIzaSyAUx08u0OaNvvJ7yoPWO_X-R4p5_Y12Xio",
    authDomain: "pdpapp-53f76.firebaseapp.com",
    projectId: "pdpapp-53f76",
    storageBucket: "pdpapp-53f76.appspot.com",
    messagingSenderId: "915746623145",
    appId: "1:915746623145:web:66156998c2c2aef83ea3b8",
    measurementId: "G-GWGZLZE2YW"
};

export const signup = (req, res) => {

    const newUser = {
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
        handle: req.body.handle
    };

    const noImg = 'no-img.png';

    let token, userId;
    db.doc(`/users/${newUser.handle}`).get().then(doc => {
        if (doc.exists) {
            return res.status(400).json({ handle: ' this handle is already taken' });
        } else {
            return auth().createUserWithEmailAndPassword(newUser.email, newUser.password);
        }
    }).then(data => {
        userId = data.user.uid;
        return data.user.getIdToken();
    }).then(idToken => {
        token = idToken;
        const userCredentials = {
            handle: newUser.handle,
            email: newUser.email,
            createdAt: new Date().toISOString(),
            imageUrl: `https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/${noImg}?alt=media`,
            userId: userId
        };
        return db.doc(`/users/${newUser.handle}`).set(userCredentials);
    }).then(() => {
        return res.status(201).json({ token });
    })
        .catch(err => {
            console.error(err);
            if (err.code === 'auth/email-already-in-use') {
                return res.status(400).json({ email: 'Email is already in use' });
            }
            else {
                return res.status(500).json({ general: 'Something went wrong. Please try Again' });
            }
        });
};

export const getAuthenticatedUser = (req, res) => {
    let userData = {};
    db.doc(`/users/${req.user.handle}`).get().then(doc => {
        if (doc.exists) {
            userData.credentials = doc.data();
            return db.collection('likes').where('userHandle', '==', req.user.handle).get();
        }
    }).then(data => {
        userData.likes = [];
        data.forEach(doc => {
            userData.likes.push(doc.data());
        });
        return db.collection('notifications').where('recepient', '==', req.user.handle).orderBy('createdAt', 'desc').limit(15).get();
    }).then(data => {
        userData.notifications = [];
        data.forEach(doc => {
            userData.notifications.push({
                recepient: doc.data().recepient,
                sender: doc.data().sender,
                createdAt: doc.data().createdAt,
                screamId: doc.data().screamId,
                senderImage: doc.data().senderImage,
                type: doc.data().type,
                read: doc.data().read,
                notificationId: doc.id
            })
        });
        return res.json(userData);
    }).catch(err => {
        console.error(err);
        res.status(500).json({ error: err.code });
    })
};