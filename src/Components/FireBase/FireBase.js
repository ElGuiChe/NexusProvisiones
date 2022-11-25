//Acceso a Firestore
import { getFirestore, doc, setDoc, collection, addDoc } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export default function FireBase() {

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNqImFsEvxFNv7mBIT9jd4n_HuAIVB4R0",
  authDomain: "provisiones-nexus.firebaseapp.com",
  projectId: "provisiones-nexus",
  storageBucket: "provisiones-nexus.appspot.com",
  messagingSenderId: "217021230567",
  appId: "1:217021230567:web:bff026f1da90967460e142"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Sirve para seleccionar la base de datos de FireStore
const db = getFirestore(app);
console.log(db)
//Fin Acceso a Firestore
}




