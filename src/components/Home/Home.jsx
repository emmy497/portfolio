import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Home.module.css";
import Navbar from "../Navigation/Navbar/Navbar";

function Home() {
  return (
    <>
      <div id="home" className={classes.HomeContainer}>
        <div className={classes.Welcome}>
          <h4>Hi, I'm Emmanuel</h4>
          <h6>Frontend Developer</h6>
          <div className={classes.icons}>
            <i class="fa-brands fa-github fa-sm"></i>
            <i class="fa-brands fa-instagram fa-sm"></i>
            <i class="fa-solid fa-envelope fa-sm"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
