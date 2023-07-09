// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyBK7OpOZdQyLn3wznQyt7hGcBlA6s8jFtM",
  authDomain: "marwar-bazzar.firebaseapp.com",
  projectId: "marwar-bazzar",
  storageBucket: "marwar-bazzar.appspot.com",
  messagingSenderId: "447697691496",
  appId: "1:447697691496:web:1326724bc82a8a91616cdd",
  measurementId: "G-20KERRF07T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()

export { app, auth }



