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
          <h6>Fullstack Developer</h6>
          <div className={classes.icons}>
            
            <NavLink
              className={classes.navLinks}
              to="https://github.com/emmy497"
              target="_blank"
            >
              <i class="fa-brands fa-github fa-sm"></i>
            </NavLink>
            <NavLink
              className={classes.navLinks}
              to="https://www.instagram.com/ejayzxxl"
              target="_blank"
            >
              <i class="fa-brands fa-instagram fa-sm"></i>
            </NavLink>
            <NavLink className={classes.navLinks} to="mailto:emmanuelisrael497@gmail.com">
              <i class="fa-solid fa-envelope fa-sm"></i>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
