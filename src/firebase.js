// import firebase from "firebase/app";
import firebase from "firebase/compat/app";
import { getFirestore } from "@firebase/firestore";

// import "firebase/auth";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  //   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  //   apiKey: "AIzaSyD-QW0mVD-TRcyRjh1MP2kJF70dWfi4MVI",
  //   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  //   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  //   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  //   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  //   appId: process.env.REACT_APP_FIREBASE_APP_ID,

  apiKey: "AIzaSyD-QW0mVD-TRcyRjh1MP2kJF70dWfi4MVI",
  authDomain: "auth-development-e6baa.firebaseapp.com",
  projectId: "auth-development-e6baa",
  storageBucket: "auth-development-e6baa.appspot.com",
  messagingSenderId: "302396835605",
  appId: "1:302396835605:web:7e8fac43f911199f374b1c",
});

export const db = getFirestore(app);

export const auth = app.auth();
export default app;
