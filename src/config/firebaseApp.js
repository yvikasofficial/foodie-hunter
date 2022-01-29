// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0OcnvPug5bXMlhV-wJg_I326dNHkHyag",
  authDomain: "polling-app-96f55.firebaseapp.com",
  databaseURL: "https://polling-app-96f55.firebaseio.com",
  projectId: "polling-app-96f55",
  storageBucket: "polling-app-96f55.appspot.com",
  messagingSenderId: "1066868606114",
  appId: "1:1066868606114:web:8126d2e2215f4331a283fb",
  measurementId: "G-KS41WEQJNN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
