import {getFirestore} from "firebase/firestore"
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyBT2YkX1GWYNYaarw2e4sbs4iKSulVO2w0",
  authDomain: "next-auth-tuto-28120.firebaseapp.com",
  projectId: "next-auth-tuto-28120",
  storageBucket: "next-auth-tuto-28120.appspot.com",
  messagingSenderId: "229092750382",
  appId: "1:229092750382:web:913f9b5a48407c5bbe1bbf"
};


export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)