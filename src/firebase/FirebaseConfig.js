// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbGMbp-I_JDyGj0QZgx3VgjceVNM0APA0",
  authDomain: "chatroom-9803a.firebaseapp.com",
  projectId: "chatroom-9803a",
  storageBucket: "chatroom-9803a.appspot.com",
  messagingSenderId: "655436794697",
  appId: "1:655436794697:web:926dd66a873244bc926898",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
