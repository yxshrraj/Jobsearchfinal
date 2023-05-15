import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAyHkQ2Sh88hU9KF4qcUhQPjuIU2mfH80A",
  authDomain: "job-listing-13644.firebaseapp.com",
  projectId: "job-listing-13644",
  storageBucket: "job-listing-13644.appspot.com",
  messagingSenderId: "571988278414",
  appId: "1:571988278414:web:80ec15d9e2ff670b311ddf"
};

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

export { firebase, firestore };
