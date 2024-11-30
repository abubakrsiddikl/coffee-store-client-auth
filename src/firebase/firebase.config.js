// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGJ6Mxq9Ez1jeovOIww3IlsQykoPAOvFI",
  authDomain: "coffee-store-11e94.firebaseapp.com",
  projectId: "coffee-store-11e94",
  storageBucket: "coffee-store-11e94.firebasestorage.app",
  messagingSenderId: "276696483065",
  appId: "1:276696483065:web:889aa4689b4de98dcc0e28",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
