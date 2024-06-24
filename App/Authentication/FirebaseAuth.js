import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyC7FYNV5fgPIIvEwqj3iaB0SgYnQG8NOeU",
  authDomain: "practice-2-61622.firebaseapp.com",
  projectId: "practice-2-61622",
  storageBucket: "practice-2-61622.appspot.com",
  messagingSenderId: "1075587607982",
  appId: "1:1075587607982:web:17aa7b9d6751e5312f6c3f",
  measurementId: "G-CN4ZW4LV72"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase; // Export the initialized Firebase instance

