import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAkg-V0Em9dis0gvZw1tnFD9PL_-Dgt2lU",
  authDomain: "netflix-clone-bb768.firebaseapp.com",
  projectId: "netflix-clone-bb768",
  storageBucket: "netflix-clone-bb768.appspot.com",
  messagingSenderId: "368367490422",
  appId: "1:368367490422:web:27fa8860886aae6d74d657",
  measurementId: "G-BQCKLFLLHP"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);