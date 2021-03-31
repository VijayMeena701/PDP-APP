import { db, auth, config } from '../../firebase';

const signup = (req, res) => {
    console.log(req);

    const noImg = 'no-img.png';

    let token, userId;
    db.doc(`/users/${require.handle}`).get().then(doc => {
        if (doc.exists) {
            res = {
                message: 'this user already exists',
                status: 500
            }
            return res;
        } else {
            return auth().createUserWithEmailAndPassword(req.email, req.password);
        }
    }).then(data => {
        userId = data.user.uid;
        return data.user.getIdToken();
    }).then(idToken => {
        token = idToken;
        const userCredentials = {
            handle: req.handle,
            email: req.email,
            createdAt: new Date().toISOString(),
            imageUrl: `https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/${noImg}?alt=media`,
            userId: userId,
            firstName: req.firstName,
            lastName: req.lastName,
            password: req.password
        };
        console.log(userCredentials);
        return db.doc(`/users/${userCredentials.handle}`).set(userCredentials);
    }).then(() => {
        res = {
            status: 201,
            message: 'Account Successfully created',
            handle: userId
        }
        return res;
    }).catch(err => {
        console.error(err);
        if (err.code === 'auth/email-already-in-use') {
            res = {
                status: 400,
                message: 'Email is already in use'
            }
            return res;
        }
        else {
            res = {
                status: 500,
                message: 'Something went wrong. Please try again'
            }
            return res;
        }
    });
};

export default signup;