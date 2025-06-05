// firebaseconfig.js – Innehåller Firebase-konfiguration och export av databaskoppling
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCa92Tc_hZ5qcTtAKemyAEAr3FgMnOCTjM",
  authDomain: "scrumboard-bab63.firebaseapp.com",
  databaseURL: "https://scrumboard-bab63-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "scrumboard-bab63",
  storageBucket: "scrumboard-bab63.firebasestorage.app",
  messagingSenderId: "600411048724",
  appId: "1:600411048724:web:197c4a3021ca88694f1001"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dataBase = getDatabase(app);