import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBoQF35p5T6FMmNfz-eoY3cnf_owj-BpUo",
  authDomain: "mylinkedin-app.firebaseapp.com",
  projectId: "mylinkedin-app",
  storageBucket: "mylinkedin-app.appspot.com",
  messagingSenderId: "609125501772",
  appId: "1:609125501772:web:c063549b668e4821779de9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
