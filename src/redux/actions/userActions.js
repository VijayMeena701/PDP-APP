import { LOADING_UI, SET_ERRORS, LOADING_USER, SET_USER, STOP_LOADING_UI, SET_AUTHENTICATED, SET_UNAUTHENTICATED, SET_EVENTS, LOADING_DATA, CLEAR_ERRORS } from '../types';
import { db, auth, config } from '../../firebase';
import schedule from '../../utils/schedule';

export const signupUser = (newUserData, history) => (dispatch) => {
    dispatch({ type: LOADING_UI });
    let userId = null;
    if (dispatch(passwordCheck(newUserData))) {
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
                password: newUserData.password,
                rankColor: "#fff",
                rank: "Not Applicable",
                hobby: 'N/A',
                job: 'N/A',
                bio: 'N/A',
                globalRank: 'N/A',
                name: newUserData.handle,
            };
            console.log(userCredentials);
            return db.doc(`/users/${userCredentials.userId}`).set(userCredentials);
        }).then(() => {
            history.push('/');
            return dispatch(getUserData(userId));
        }).then(() => {
            return dispatch(setEvents(schedule));
        }).catch((err) => {
            console.log(err);
            dispatch({ type: SET_ERRORS, payload: err.code })
            return err;
        });
    }
};

export const login = (UserData, history) => (dispatch) => {
    dispatch({ type: LOADING_UI });
    auth.signInWithEmailAndPassword(UserData.email, UserData.password).then((userCredentials) => {
        dispatch({ type: SET_AUTHENTICATED });
        return userCredentials;
    }).then((data) => {
        history.push('/');
        return dispatch(getUserData(data.user.uid));
    }).then(() => {
        return dispatch(setEvents(schedule));
    }).catch((err) => {
        console.log(err);
        dispatch({ type: SET_ERRORS, payload: err })
        return err;
    });
};

export const logout = () => (dispatch) => {
    auth.signOut().then(() => {
        dispatch(window.location.href = '/signin')
        dispatch({ type: SET_UNAUTHENTICATED })
    }).catch(err => {
        dispatch({ type: SET_ERRORS, payload: err })
    })
}

export const getUserData = (userId) => (dispatch) => {
    dispatch({ type: LOADING_USER });
    let userData = {};
    db.doc(`/users/${userId}`).get().then(doc => {
        if (doc.exists) {
            userData.credentials = doc.data();
            dispatch({ type: SET_USER, payload: userData });
        }
    }).then(() => {
        dispatch({ type: CLEAR_ERRORS });
        dispatch({ type: STOP_LOADING_UI });
    }).catch(err => {
        dispatch({ type: STOP_LOADING_UI });
        return dispatch({ type: SET_ERRORS, payload: err });
    })
};

export const updateprofile = (userId, data) => (dispatch) => {
    dispatch({ type: LOADING_UI });
    db.collection('users').doc(`${userId}`).set(data).then(() => {
        console.log('fired');
        return dispatch(getUserData(userId));
    }).catch((err) => {
        dispatch({ type: SET_ERRORS, payload: err })
    })
}

export const passwordCheck = (userData) => (dispatch) => {
    if (userData.password === userData.confirmPassword) return true;
    else {
        dispatch({ type: SET_ERRORS, payload: "Passwords do not match" })
        return false;
    }
};

const setEvents = (schedules) => (dispatch) => {
    dispatch({ type: LOADING_DATA })
    dispatch({ type: SET_EVENTS, payload: schedules });
    dispatch({ type: STOP_LOADING_UI });
}