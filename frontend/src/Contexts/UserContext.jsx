import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

import { createContext, useLayoutEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = function ({ children }) {
  const [user, setUser] = useState({});

  const auth = getAuth();
  const db = getFirestore(app);

  async function checkIfUserExists(id) {
    const docRef = doc(db, "users", id);
    const docSnap = await getDoc(docRef);
    return docSnap;
  }

  async function createAUserDoc(newUser) {
    try {
      await setDoc(doc(db, "users", newUser.uid), newUser);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  async function registerWithGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        const userInfo = { name: user.displayName, uid: user.uid, email: user.email };
        const doesExists = checkIfUserExists(user.uid);
        if (!doesExists) {
          createAUserDoc({ type: "farmer", chats: [], communities: [], uid: user.uid });
        }
        setUser(user);
      }).catch((error) => {
        console.log(error);
      });
  }
  useLayoutEffect(function () {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      }
      else setUser(null);
    });
  }, [setUser])

  return <UserContext.Provider value={{ user, registerWithGoogle }}>
    {children}
  </UserContext.Provider>
}

// Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAFYR0i-hXg7Tehr9B9T0RFZy9ks0Hu0y4",
  authDomain: "plant-detection-7cb1c.firebaseapp.com",
  projectId: "plant-detection-7cb1c",
  storageBucket: "plant-detection-7cb1c.appspot.com",
  messagingSenderId: "263641659396",
  appId: "1:263641659396:web:17ebc93a63fb9c25969d51",
  measurementId: "G-F5WNPPWCYW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);