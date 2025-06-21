// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClloVMTwtTlXtIRGaC3w9pDg7j2PYLF1c",
  authDomain: "midexam2403.firebaseapp.com",
  projectId: "midexam2403",
  storageBucket: "midexam2403.firebasestorage.app",
  messagingSenderId: "601709641290",
  appId: "1:601709641290:web:db11d060023376a4baf0b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

console.log("firebase is working properly");

export default app