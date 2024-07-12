// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth/cordova";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOlpIkAusQFMq9YLooNdJHRFK9Vf3QyRY",
  authDomain: "practice2-project51.firebaseapp.com",
  projectId: "practice2-project51",
  storageBucket: "practice2-project51.appspot.com",
  messagingSenderId: "961230490718",
  appId: "1:961230490718:web:536b0ad254f46fda63b8cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;