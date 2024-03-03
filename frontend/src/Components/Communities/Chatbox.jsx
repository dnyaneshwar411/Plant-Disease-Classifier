import { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom"
import { doc, getFirestore, onSnapshot } from "firebase/firestore";

import { UserContext, app } from "../../Contexts/UserContext";

import styles from "./Chatbox.module.css";
import { CommunityContext } from "../../Contexts/CommunityContext";

export default function Chatbox() {
  const [messages, setMessages] = useState([]);
  const [name, setName] = useState("community");
  const [profileImg, setProfileImg] = useState("");
  const { id } = useParams();

  const scroll = useRef(null);

  useEffect(function () {
    const db = getFirestore(app);

    const unsub = onSnapshot(doc(db, "communities", id), (doc) => {
      const data = doc.data()
      setMessages(data?.messages || []);
      setName(data.name);
      setProfileImg(data.profileImg)
    });
    return () => unsub;
  }, [id, setMessages]);

  return <div className="flex flex-col w-full h-full w-full lg:w-[calc(100% - 24rem)]">
    <ChatHeading name={name} profileImg={profileImg} />
    <ChatMessages messages={messages} scroll={scroll} />
    <MessageBox scroll={scroll} />
  </div>
}

function ChatHeading({ name, profileImg }) {
  return <div className="px-8 h-32 py-4 bg-slate-800 flex items-center gap-4">
    <img src={profileImg} className="w-14 aspect-square object-cover rounded-lg border-2 border-slate-700" alt="" />
    <h2>{name}</h2>
  </div>
}

function ChatMessages({ messages, scroll }) {
  const { user } = useContext(UserContext);
  return <div className={`px-8 py-8 h-full overflow-y-scroll ${styles.messageBox}`}>
    {messages.map((message, index) => <p key={index} className={`${user.uid === message.senderId ? "text-right rounded-br-[0] ml-auto" : "rounded-bl-[0]"} ${styles.message}`}>{message.message}</p>)}
    <span ref={scroll}></span>
  </div>
}

function MessageBox({ scroll }) {
  const [message, setMessage] = useState("");
  const { user } = useContext(UserContext);
  const { uploadMessage } = useContext(CommunityContext);
  const { id } = useParams();

  function sendMessage() {
    if (message === "") return;
    setMessage("");
    const newChat = {
      message,
      "senderId": user.uid,
      createdAt: new Date()
    }
    uploadMessage(newChat, "communities", id);
  }
  useEffect(function () {
    scroll.current.scrollIntoView({ behavior: "smooth" });
  }, [setMessage]);

  return <div className="px-8 py-4 flex bg-slate-800 gap-4">
    {/* <span><ion-icon name="attach-outline"></ion-icon></span>
    <input type="file" /> */}
    <input type="text" value={message} onChange={e => setMessage(e.target.value)} className="focus:outline-none bg-transparent w-full" placeholder="message..." />
    <button className="bg-transparent" onClick={sendMessage}><ion-icon name="paper-plane-outline"></ion-icon></button>
  </div>
}