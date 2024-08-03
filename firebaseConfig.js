    // Import the functions you need from the SDKs you need
    import { initializeApp } from 'firebase/app';
import { addDoc, collection, deleteDoc, doc, getDocs, getFirestore, updateDoc } from 'firebase/firestore';

    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
    apiKey: "AIzaSyDMeKA1mX8KYLZHxmr3fz0rMt99nlNeifU",
    authDomain: "pantry-tracking-app-5d476.firebaseapp.com",
    projectId: "pantry-tracking-app-5d476",
    storageBucket: "pantry-tracking-app-5d476.appspot.com",
    messagingSenderId: "835468430673",
    appId: "1:835468430673:web:adafacd58b865498021770",
    measurementId: "G-M2FTLCM9PB"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    export { addDoc, collection, db, deleteDoc, doc, getDocs, updateDoc };

