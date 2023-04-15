// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDscrStgnEbFiC4gy0GWbTp5hV64Azj8gI",
    authDomain: "fir-auth-tailwind.firebaseapp.com",
    projectId: "fir-auth-tailwind",
    storageBucket: "fir-auth-tailwind.appspot.com",
    messagingSenderId: "999702177879",
    appId: "1:999702177879:web:a0badd3d7694d67455db12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;