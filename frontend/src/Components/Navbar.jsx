import { Link } from "react-router-dom";
import { Container } from "./DisplayBoxes"
import icon from "/images/icon.jpg"
import Toggle from "./Toggle";
import { useState } from "react";

export default function Navbar() {
  const [isToggled, setIsToggled] = useState(false);

  function handleToggle() {
    setIsToggled(prev => !prev);
  }

  const links = [
    { title: "communities", location: "/communities" },
    { title: "shops", location: "/shops" },
    { title: "weather", location: "/weather" },
    { title: "login", location: "/login" },
  ];

  return <nav className="padding-inline flex py-4 justify-between items-center border-b border-[#ffffff1a]">
    <Link to="/"><img src={icon} alt="icon" className="w-12 aspect-square object-cover rounded-full" /></Link>
    <div className={`fixed sm:static left-0 right-0 pt-20 pb-10 sm:pt-0 sm:pb-0 bg-[#283618] sm:bg-transparent z-10`} style={{ top: isToggled ? "0" : "-100%" }}>
      <Container classes={"gap-8 relative text-xl sm:text-sm flex-col h-full sm:flex-row justify-center items-center"}>
        {links.map(({ title, location }, index) => <Link className="" key={index} to={location}>{title}</Link>)}
        <Toggle />
        <span className="absolute right-8 sm:hidden" style={{ top: "-40px" }}>
          {isToggled && <ion-icon name="close-outline" onClick={handleToggle}></ion-icon>}
        </span>
      </Container>
    </div>
    {!isToggled && <span className="sm:hidden"><ion-icon name="menu-outline" onClick={handleToggle}></ion-icon></span>}
  </nav >
}
