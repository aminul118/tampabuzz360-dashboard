// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey as string,
  authDomain: import.meta.env.VITE_authDomain as string,
  projectId: import.meta.env.VITE_projectId as string,
  storageBucket: import.meta.env.VITE_storageBucket as string,
  messagingSenderId: import.meta.env.VITE_messagingSenderId as string,
  appId: import.meta.env.VITE_appId as string,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
