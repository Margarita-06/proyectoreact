import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAFNMBfHo6oNRV4XLqLw2FTqitJMPy08FU",
    authDomain: "proyectoreact-1411f.firebaseapp.com",
    projectId: "proyectoreact-1411f",
    storageBucket: "proyectoreact-1411f.firebasestorage.app",
    messagingSenderId: "274080982336",
    appId: "1:274080982336:web:3109eeda33812ac6ad46a5",
    measurementId: "G-MWTHW8TWQK"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };