import burgerlogo from "../assets/burgerlogo.png";
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <div className="main">
        <img src={burgerlogo} alt="" />

        <div className="mainLink">
          <Link to="/">Anasayfa</Link>
          <Link to="/Menu">Menü</Link>
          <Link to="/About">Hakkımızda</Link>
          <Link to="/Contact">İletişim</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
