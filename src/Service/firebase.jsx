// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0xnoGOyKkRS2U3gHMCq_APOXdQcBmd9Q",
  authDomain: "coderreact-e83b7.firebaseapp.com",
  projectId: "coderreact-e83b7",
  storageBucket: "coderreact-e83b7.firebasestorage.app",
  messagingSenderId: "836017495720",
  appId: "1:836017495720:web:00febfd47ec9cdea35ac9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//exportar para uso
export const db = getFirestore(app)
//luego import es sup linea 3
