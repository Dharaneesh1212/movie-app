import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  Timestamp,
} from "firebase/firestore";
import { toast } from "react-toastify";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAVzPYQxCWUhkq8G2oAPdwPYEcz12abaGQ",
  authDomain: "movie-site-cc013.firebaseapp.com",
  projectId: "movie-site-cc013",
  storageBucket: "movie-site-cc013.appspot.com",
  messagingSenderId: "1014336432821",
  appId: "1:1014336432821:web:c3c83b19887318fe706cfc",
};

// Initialize Firebase
const movieApp = initializeApp(firebaseConfig);

// Authentication
const movieAuth = getAuth(movieApp);

// Google signup
const googleProvider = new GoogleAuthProvider();

const signInWithGooglePopUp = async () =>
  signInWithPopup(movieAuth, googleProvider);

// Signup
const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password)
    return createUserWithEmailAndPassword(movieAuth, email, password);
};

// Signin
const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password)
    return signInWithEmailAndPassword(movieAuth, email, password);
};

// Firestore database
const movieDb = getFirestore(movieApp);

const createUserDocumentFromAuth = async (userAuth) => {
  if (!userAuth) return;

  const userDocRef = doc(movieDb, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (userSnapshot.exists()) {
    const { displayName, email } = userAuth;

    if (displayName) {
      const createdAt = Timestamp.now();

      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
        });
        toast("User created successfully");
        console.log("User created successfully");
      } catch (error) {
        toast("Error on creating user", error);
        console.log("error", error);
      }
    }
  } else {
    toast("User already exist");
  }

  return userDocRef;
};

export {
  movieAuth,
  signInWithGooglePopUp,
  createUserDocumentFromAuth,
  createAuthUserWithEmailAndPassword,
  signInAuthUserWithEmailAndPassword,
};
