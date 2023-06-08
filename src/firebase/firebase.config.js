// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYm8u1nCRaVQIMvA6fXJDhWhBTtgrcouc",
  authDomain: "ecommerce-margenet.firebaseapp.com",
  projectId: "ecommerce-margenet",
  storageBucket: "ecommerce-margenet.appspot.com",
  messagingSenderId: "356416723798",
  appId: "1:356416723798:web:7486cad118bcb5295dd4f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
