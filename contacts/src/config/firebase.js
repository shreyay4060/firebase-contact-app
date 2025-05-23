
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCv3c6IlKNRIwy04RKQRG1g7U3BcpQ3rjA",
  authDomain: "contacts-54c30.firebaseapp.com",
  projectId: "contacts-54c30",
  storageBucket: "contacts-54c30.firebasestorage.app",
  messagingSenderId: "1037609185876",
  appId: "1:1037609185876:web:a0764753bab271a2fbf3c1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);