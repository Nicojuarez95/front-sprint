import React from "react";
import NavButton from "../NavButton/NavButton";
import "./header.css";

export default function Header() {
  return (
    <header>
        <NavButton/>
        <img src="./LogoM.png" alt="Logo" />
    </header>
  )
}
