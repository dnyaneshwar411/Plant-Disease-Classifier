import { createContext, useEffect, useReducer, useState } from "react";

import { arrayUnion, collection, doc, getDocs, getFirestore, updateDoc } from "firebase/firestore";
import { app } from "./UserContext";

export const CommunityContext = createContext();

export function CommunityProvider({ children }) {
  // const [communities, dispatch] = useReducer(reducer, initialState)

  const [communities, setCommunities] = useState([]);
  const db = getFirestore(app);

  async function getCommunities() {
    const db = getFirestore(app);
    let allCommunities = [];
    const querySnapshot = await getDocs(collection(db, "communities"));
    querySnapshot.forEach((doc) => {
      allCommunities.push({ id: doc.id, ...doc.data() });
    });
    setCommunities(allCommunities);
  }

  function getChat(collection, docId) {
    const chat = doc(db, collection, docId);
    return chat;
  }

  async function uploadMessage(message, collection, docId) {
    const doc = getChat(collection, docId);

    try {
      await updateDoc(doc, {
        messages: arrayUnion(message)
      });
    } catch (e) {
      console.log("Error adding document: ", e);
    }
  }

  useEffect(function () {
    getCommunities()
    return () => getCommunities;
  }, []);

  return <CommunityContext.Provider value={{ communities, getCommunities, uploadMessage }}>
    {children}
  </CommunityContext.Provider>
}