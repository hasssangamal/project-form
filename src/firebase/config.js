// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth , createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuXhRIAjs5BaRjC7r2xBZfUgdRgTIltg4",
  authDomain: "form-39fe8.firebaseapp.com",
  projectId: "form-39fe8",
  storageBucket: "form-39fe8.appspot.com",
  messagingSenderId: "926685481806",
  appId: "1:926685481806:web:6af742854ea1d2f0c92c1f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export  const auth = getAuth(app);