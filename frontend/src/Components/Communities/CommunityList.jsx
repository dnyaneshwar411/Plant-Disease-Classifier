import { useContext, useState } from "react"
import { useEffect } from "react";
import { NavLink } from "react-router-dom"

import { CommunityContext } from "../../Contexts/CommunityContext"

import styles from "./Chatbox.module.css";

export default function CommunityList({ isListOpen }) {
  const [communities, setCommunities] = useState([]);
  const { communities: gotCommunities, getCommunities } = useContext(CommunityContext);

  useEffect(function () {
    getCommunities()
    setCommunities(gotCommunities);
  }, [setCommunities, gotCommunities]);

  return <div className={`absolute h-full ${isListOpen ? "left-0" : "left-[-105%]"} z-10 lg:static w-96 border-r-2 p-6 ${styles.messageBox}`}>
    {communities.map(community => <Community key={community.id} community={community} />)}
  </div>
}

export function Community({ community }) {
  return <NavLink to={`/communities/${community.id}`}>
    <div className="flex items-center gap-4 mb-4">
      <img src={community.profileImg} alt="community" className="w-12 mx-0 aspect-square rounded-xl object-cover border-2 border-slate-700" />
      <div>
        <h4>{community.name}</h4>
        <p className="text-sm">owner</p>
      </div>
    </div>
  </NavLink>
}