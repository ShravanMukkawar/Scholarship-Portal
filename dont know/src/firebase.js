// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABWclQfre5V1CBCMDsEBKkB1bP309t1YY",
  authDomain: "mastercard-1330e.firebaseapp.com",
  projectId: "mastercard-1330e",
  storageBucket: "mastercard-1330e.appspot.com",
  messagingSenderId: "630462859923",
  appId: "1:630462859923:web:f6334482842dba34039b66",
  measurementId: "G-QL8GBJWKRD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);