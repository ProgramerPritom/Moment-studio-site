// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhmZTR458aQaMqu8HwHibuaxx0QDY1lqA",
  authDomain: "moment-studio-photography.firebaseapp.com",
  projectId: "moment-studio-photography",
  storageBucket: "moment-studio-photography.appspot.com",
  messagingSenderId: "938560397632",
  appId: "1:938560397632:web:38af28d01eadb45bec9aa5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
