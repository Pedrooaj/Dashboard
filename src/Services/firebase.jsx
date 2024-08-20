import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {

  apiKey: "AIzaSyDM0eo6pkb0mqRuiMzU4tJpMmfZUJxnocI",

  authDomain: "dashboard-c6efc.firebaseapp.com",

  projectId: "dashboard-c6efc",

  storageBucket: "dashboard-c6efc.appspot.com",

  messagingSenderId: "748497722137",

  appId: "1:748497722137:web:29b7cc91d5a09a3e73c388",

  measurementId: "G-0WN1ZC1QZK"

};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
