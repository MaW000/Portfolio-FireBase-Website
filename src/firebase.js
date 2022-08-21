import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyA9XRi_gmkJDGwC-07OE87NLZvmiAsr46A",
    authDomain: "react-portfolio-dash.firebaseapp.com",
    projectId: "react-portfolio-dash",
    storageBucket: "react-portfolio-dash.appspot.com",
    messagingSenderId: "995481665040",
    appId: "1:995481665040:web:83e00f4eec1a14ed4fd495",
    measurementId: "G-HN7GW53CQL"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);