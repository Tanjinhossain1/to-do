// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCn_LsD4JBKEufanB7IBmFUC2koclR3eO0",
  authDomain: "todo-125c0.firebaseapp.com",
  projectId: "todo-125c0",
  storageBucket: "todo-125c0.appspot.com",
  messagingSenderId: "305901317712",
  appId: "1:305901317712:web:5a7a3d8292ec7457dceb55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;