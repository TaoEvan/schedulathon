// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCInqUm85AnSl0g1bt0soZeBdddLfKKVmg",
  authDomain: "schedulathon.firebaseapp.com",
  projectId: "schedulathon",
  storageBucket: "schedulathon.appspot.com",
  messagingSenderId: "391408225812",
  appId: "1:391408225812:web:94d3f0f955c89b5e366101",
  measurementId: "G-0LMF5GQHSX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const database = firebase.database();