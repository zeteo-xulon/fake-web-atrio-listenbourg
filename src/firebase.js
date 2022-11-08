// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDs7lgnjBnZlBMhF4nPp55hq9I68a-PSEQ",
  authDomain: "fireshipbaseproject.firebaseapp.com",
  projectId: "fireshipbaseproject",
  storageBucket: "fireshipbaseproject.appspot.com",
  messagingSenderId: "575314114007",
  appId: "1:575314114007:web:2663af863d3a783b25c792",
  measurementId: "G-HG0932TR43"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase);