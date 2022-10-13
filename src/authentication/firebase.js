// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbMvNOK1nqF09c3VOrtVolsAeGjug43JM",
  authDomain: "rea4-dts2022.firebaseapp.com",
  projectId: "rea4-dts2022",
  storageBucket: "rea4-dts2022.appspot.com",
  messagingSenderId: "125784046924",
  appId: "1:125784046924:web:f47e2606039eda0d6663e9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const registrasiDenganEmaildanPassword = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    console.log("user yg sudah keregister adalah ", userCredential.user);
  } catch (error) {
    console.log(error);
    console.log(error.code);
    console.log(error.message);
  }
};

const signInDenganEmaildanPassword = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    console.log("user yg sudah login adalah ", userCredential.user);
  } catch (error) {
    console.log(error);
    console.log(error.code);
    console.log(error.message);
  }
};

const signOutDariApp = async () => {
  // Dokumentasi: https://firebase.google.com/docs/auth/web/password-auth#next_steps
  try {
    await signOut(auth);
  } catch (err) {
    console.log(err);
  }
};

export {
  auth,
  signInDenganEmaildanPassword,
  signOutDariApp,
  registrasiDenganEmaildanPassword,
};
