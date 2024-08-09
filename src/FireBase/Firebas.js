// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdno_wc6OOyfUG4iF0_SxDIrzRiSZv66c",
  authDomain: "reactprojectauth-c8bf8.firebaseapp.com",
  projectId: "reactprojectauth-c8bf8",
  storageBucket: "reactprojectauth-c8bf8.appspot.com",
  messagingSenderId: "102254315986",
  appId: "1:102254315986:web:41882e6e073cc2bf7b600b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const provider2 = new FacebookAuthProvider();
