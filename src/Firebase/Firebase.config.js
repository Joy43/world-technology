// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxYochd3rWj6JB4K1YGhnYktEeeU1rKDQ",
  authDomain: "tech-products-790d3.firebaseapp.com",
  projectId: "tech-products-790d3",
  storageBucket: "tech-products-790d3.appspot.com",
  messagingSenderId: "707294724122",
  appId: "1:707294724122:web:71ff11141ecc217c6b51a3",
  measurementId: "G-KCMC17Y0ME"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;