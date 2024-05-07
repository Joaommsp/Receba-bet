import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDd1YVJJDt0ryzis8AZBqoyRGLF5WsfHyc",
  authDomain: "receba-bet.firebaseapp.com",
  databaseURL: "https://receba-bet-default-rtdb.firebaseio.com",
  projectId: "receba-bet",
  storageBucket: "receba-bet.appspot.com",
  messagingSenderId: "580477382270",
  appId: "1:580477382270:web:ef81eb9d8b0370007fb22f",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
