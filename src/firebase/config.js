// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCiC054EKzQBUvLxs1XAPTa26AgY3DZQYE",
    authDomain: "kaczur-ecommerce.firebaseapp.com",
    projectId: "kaczur-ecommerce",
    storageBucket: "kaczur-ecommerce.appspot.com",
    messagingSenderId: "994972641361",
    appId: "1:994972641361:web:037ef703900eff91ccf070"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app); 