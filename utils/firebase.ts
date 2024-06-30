// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3Dru830kMb945cozJNOhYsBUiFSJoxh8",
  authDomain: "portfolio-2e898.firebaseapp.com",
  projectId: "portfolio-2e898",
  storageBucket: "portfolio-2e898.appspot.com",
  messagingSenderId: "395251131262",
  appId: "1:395251131262:web:8c7186d3a3d0a9e8c2c92f",
  measurementId: "G-CMTGDCFF0H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);