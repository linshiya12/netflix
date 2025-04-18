// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlLMTEsTjyB5uol7bcZaRmBsYQmltqJRs",
  authDomain: "netflixclone-c20b4.firebaseapp.com",
  projectId: "netflixclone-c20b4",
  storageBucket: "netflixclone-c20b4.firebasestorage.app",
  messagingSenderId: "904802478040",
  appId: "1:904802478040:web:1a5f87e42e6f2a23df74ad",
  measurementId: "G-DM50NL2LG0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();