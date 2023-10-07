import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref } from "firebase/database";
// import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAad55sYbMHVh9dIkVgq_F1QWGtFJeMgwg",
    authDomain: "crickettelenorzong.firebaseapp.com",
    databaseURL: "https://crickettelenorzong.firebaseio.com",
    projectId: "crickettelenorzong",
    storageBucket: "crickettelenorzong.appspot.com",
    messagingSenderId: "296181766295",
    appId: "1:296181766295:web:d92abadbe59f240b",
    measurementId: "G-06Q06TCMQH"
};


const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_DATABASE = getDatabase(FIREBASE_APP);
export const FIREBASE_DATABASE_REF = ref(FIREBASE_DATABASE,'/');
// export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
// const analytics = getAnalytics(FIREBASE_APP);
