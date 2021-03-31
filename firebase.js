// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBqxYSntuU1S-ISF3fG6z6iZr8MACs3rUw",
  authDomain: "project-whatsapp-2.firebaseapp.com",
  projectId: "project-whatsapp-2",
  storageBucket: "project-whatsapp-2.appspot.com",
  messagingSenderId: "100607661445",
  appId: "1:100607661445:web:e699e5bc9e9662f27060ec",
  measurementId: "G-QXNL7HTR7Q",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
