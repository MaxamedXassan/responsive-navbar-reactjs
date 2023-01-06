import "./NavBarStyles.css";

import React from 'react'

import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="navbar">
       <h2>Huriye</h2>
       <div>
       <ul id="menu">
        <li><a href="index.html">Home</a></li>
        <li><a href="index.html">Project</a></li>
        <li><a href="index.html">About</a></li>
        <li><a href="index.html">Contact</a></li>
       
       </ul>
      
       </div>
       <div className="hamburger">
        <FaTimes size={20} style={{color : "#fff"}}/>
        <FaBars size={20} style={{color : "#fff"}}/>
       </div>
    </div>
  )
}

export default NavBar