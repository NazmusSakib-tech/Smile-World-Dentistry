import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializitionFirebase= ()=>{
    initializeApp(firebaseConfig);
}

export default initializitionFirebase;