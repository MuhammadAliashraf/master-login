import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBXQoPO5FSeIXqlI-iUIBohtiQD8G0A6Ck",
  authDomain: "auth-bec3c.firebaseapp.com",
  projectId: "auth-bec3c",
  storageBucket: "auth-bec3c.appspot.com",
  messagingSenderId: "940863860581",
  appId: "1:940863860581:web:f6408b486fd685ed783b8c"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth();

export {app,auth };
