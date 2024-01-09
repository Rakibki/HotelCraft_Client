// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBil9jhUT45oN2aUUZ0fjgSl26zisuFco0",
  authDomain: "hotelcraft-f8a46.firebaseapp.com",
  projectId: "hotelcraft-f8a46",
  storageBucket: "hotelcraft-f8a46.appspot.com",
  messagingSenderId: "452378516733",
  appId: "1:452378516733:web:b46f582ac48555b3f63294"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth