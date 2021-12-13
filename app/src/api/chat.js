// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAYVxQAFZcaT2eFg7Krjgah4eyRvctNkxw",
    authDomain: "chatpwa-4iwj.firebaseapp.com",
    projectId: "chatpwa-4iwj",
    storageBucket: "chatpwa-4iwj.appspot.com",
    messagingSenderId: "961052339867",
    appId: "1:961052339867:web:e83f8c5e4f08ad34f1a03e",
    measurementId: "G-VZR5RXV8PN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
