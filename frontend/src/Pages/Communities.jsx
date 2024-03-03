import { useState } from "react";
import { useParams } from "react-router-dom";

import CommunityList from "../Components/Communities/CommunityList";
import Chatbox from "../Components/Communities/Chatbox";

import styles from "../Components/Communities/Chatbox.module.css"

export default function Communities() {
  const { id: selectedCommunityId } = useParams();
  const [isListOpen, setIsListOpen] = useState(false);
  function toggleList() {
    setIsListOpen(prev => !prev)
  }

  return <div className="flex h-screen border-2 relative overflow-hidden">
    <CommunityList isListOpen={isListOpen} />
    <span onClick={toggleList} className={`absolute block z-10 top-1/2 left-2 lg:hidden bg-cyan-500 shadow-xl cursor-pointer shadow-cyan-500/50 w-10 aspect-square leading-9 text-center rounded-full text-2xl ${styles.chatToggleBtn}`}>{isListOpen ? <>&lt;</> : <>&gt;</>}</span>
    {selectedCommunityId && <Chatbox />}
  </div>
}