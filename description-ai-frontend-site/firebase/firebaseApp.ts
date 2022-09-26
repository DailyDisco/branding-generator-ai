// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuUsO2dvGCamnCsV7NavhPNuibL4shzLU",
  authDomain: "brandinggeneratordemo.firebaseapp.com",
  projectId: "brandinggeneratordemo",
  storageBucket: "brandinggeneratordemo.appspot.com",
  messagingSenderId: "227964099443",
  appId: "1:227964099443:web:79084037bbe27708ca4306",
  measurementId: "G-5MRCCS0Z3D"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Explore function to initialize firebase app
export const initFirebase = () => {
    return app;
};