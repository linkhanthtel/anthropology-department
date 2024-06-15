// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
// "anthropology-department.firebaseapp.com"
const firebaseConfig = {
  apiKey: "AIzaSyDVVFHr3Q4-tbFUA2uGyKNDB5Q6NApXc9s",
  authDomain: "https://anthropology-department.vercel.app/", 
  projectId: "anthropology-department",
  storageBucket: "anthropology-department.appspot.com",
  messagingSenderId: "918034390286",
  appId: "1:918034390286:web:89206b2576a3669db18b5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);