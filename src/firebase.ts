import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "convo-845d8.firebaseapp.com",
    // The value of `databaseURL` depends on the location of the database
    // databaseURL: "https://DATABASE_NAME.firebaseio.com",
    projectId: "convo-845d8",
    storageBucket: "convo-845d8.appspot.com",
    messagingSenderId: "889771279071",
    appId: "1:889771279071:web:0f2c456ec722b4f46ddf6a",
    measurementId: "G-5SC0WMSFNE"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const analytics = getAnalytics(app);

export {auth}


