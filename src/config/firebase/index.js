import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3fAvJa4l6v19mWUCFaWdLKj9IoBgmvd4",
  authDomain: "reactjs-notes-10b1b.firebaseapp.com",
  databaseURL: "https://reactjs-notes-10b1b.firebaseio.com",
  projectId: "reactjs-notes-10b1b",
  storageBucket: "reactjs-notes-10b1b.appspot.com",
  messagingSenderId: "65211879809",
  appId: "1:65211879909:web:3ae38ef1cdcb2e01fe5f0c",
  measurementId: "G-8GSGZQ44ST",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
export const database = firebase.database();

export default firebase;
