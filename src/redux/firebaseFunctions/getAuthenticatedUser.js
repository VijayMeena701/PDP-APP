import { db } from '../../firebase';
const getAuthenticatedUser = (req) => {
    let userData = {};
    db.doc(`/users/${req.handle}`).get().then(doc => {
        if (doc.exists) {
            userData = doc.data();
            return userData;
        }
    }).catch(err => {
        console.error(err);
        return err;
    })
};
export default getAuthenticatedUser;