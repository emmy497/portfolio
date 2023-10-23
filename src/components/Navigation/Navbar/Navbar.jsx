import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";

function Navbar() {
  const [openNav, setopenNav] = useState(false);

  const setopenNavHandler = () => {
    setopenNav((prevState) => !prevState);
    console.log(openNav);
  };
  return (
    <div className="nav_container">
      <div className="ham_and_logo">
        <div
          className={`menu-btn ${openNav ? "close" : ""}`}
          onClick={setopenNavHandler}
        >
          <div class="btn-line"></div>
          <div class="btn-line"></div>
          <div class="btn-line"></div>
        </div>
        <p>EJ</p>
      </div>

      <div  onClick={setopenNavHandler}>
        <nav className={`navLinks ${openNav ? "open" : "close"}`}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="/">contact</a>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
