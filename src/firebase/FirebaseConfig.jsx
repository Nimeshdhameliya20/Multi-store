// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBouhpy1OVdB80JqITpdXFBtfEo9_ktuv8",
  authDomain: "multi-store-987b5.firebaseapp.com",
  projectId: "multi-store-987b5",
  storageBucket: "multi-store-987b5.appspot.com",
  messagingSenderId: "562388807605",
  appId: "1:562388807605:web:141042936ac28934e773fc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };
