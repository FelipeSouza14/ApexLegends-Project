// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA_MPZI3wvrFKmUGhEf5OVf4oLwZfln-uk",
    authDomain: "apexlegends-project.firebaseapp.com",
    projectId: "apexlegends-project",
    storageBucket: "apexlegends-project.appspot.com",
    messagingSenderId: "192160073490",
    appId: "1:192160073490:web:1a4e1cebc9767eae4ed5cb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);