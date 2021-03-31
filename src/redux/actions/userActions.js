import { LOADING_UI, SET_ERRORS, LOADING_USER, SET_USER, STOP_LOADING_UI, SET_AUTHENTICATED } from '../types';
import { db, auth, config } from '../../firebase';

export const signupUser = (newUserData, history) => (dispatch) => {
    dispatch({ type: LOADING_UI });
    let userId = null;
    auth.createUserWithEmailAndPassword(newUserData.email, newUserData.password).then((userCredentials) => {
        console.log(userCredentials);
        dispatch({ type: SET_AUTHENTICATED });
        return userCredentials;
    }).then((data) => {
        userId = data.user.uid
        const noImg = 'no-img.png';
        const userCredentials = {
            handle: newUserData.handle,
            email: newUserData.email,
            createdAt: new Date().toISOString(),
            imageUrl: `https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/${noImg}?alt=media`,
            userId: userId,
            firstName: newUserData.firstName,
            lastName: newUserData.lastName,
            password: newUserData.password
        };
        console.log(userCredentials);
        return db.doc(`/users/${userCredentials.userId}`).set(userCredentials);
    }).then(() => {
        return dispatch(getUserData(userId));
    }).catch((err) => {
        console.log(err);
        dispatch({ type: SET_ERRORS, payload: err.message })
        return err;
    });
    history.push('/');
};

export const login = (UserData, history) => (dispatch) => {
    dispatch({ type: LOADING_UI });
    auth.signInWithEmailAndPassword(UserData.email, UserData.password).then((userCredentials) => {
        console.log(userCredentials);
        dispatch({ type: SET_AUTHENTICATED });
        return userCredentials;
    }).then((data) => {
        return dispatch(getUserData(data.user.uid));
    }).catch((err) => {
        console.log(err);
        dispatch({ type: SET_ERRORS, payload: err.message })
        return err;
    });
    history.push('/');
};

export const getUserData = (userId) => (dispatch) => {
    dispatch({ type: LOADING_USER });
    let userData = {};
    db.doc(`/users/${userId}`).get().then(doc => {
        if (doc.exists) {
            userData.credentials = doc.data();
            console.log(userData);
            dispatch({ type: STOP_LOADING_UI })
            dispatch({ type: SET_USER, payload: userData });
        }
    }).catch(err => {
        return dispatch({ type: SET_ERRORS, payload: err.code });
    })
}