import React from "react";
import "../assets/style/nav.css";
export default function Navbar() {
  return (
    <div className="nav">
      <div className="logo">LOGO </div>
      <div className="menu">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
         <li className="log">Login</li>
         <li className="sign">Signup</li> 

        </ul>
      </div>
    </div>
  );
}
