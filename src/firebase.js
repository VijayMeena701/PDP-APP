import firebase from 'firebase';
const config = {
    apiKey: "AIzaSyAUx08u0OaNvvJ7yoPWO_X-R4p5_Y12Xio",
    authDomain: "pdpapp-53f76.firebaseapp.com",
    projectId: "pdpapp-53f76",
    storageBucket: "pdpapp-53f76.appspot.com",
    messagingSenderId: "915746623145",
    appId: "1:915746623145:web:66156998c2c2aef83ea3b8",
    measurementId: "G-GWGZLZE2YW"
}

const firebaseApp = firebase.initializeApp(config);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

export { db, auth, storage, config };