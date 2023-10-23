import React from "react";
import "./Projects.css";
import Cards from "../Cards/Cards";
import sky from "../../assets/images/ethan-hoover-eIVJAkj1uCs-unsplash.jpg"
import image2 from "../../assets/images/stars.jpg"
import dog from "../../assets/images/dog.jpg"
import notes from "../../assets/images/notes.jpg"
import weather from "../../assets/images/weather.jpg"
import Burger from "../../assets/images/burger.jpg"
import {NavLink} from "react-router-dom"

function Projects() {
  return (
    <div id="projects" className="projects">
      <h4>Projects</h4>
      <div className="projects_container"> 
        <NavLink to="/#projects"><Cards title="Dog store" imgUrl={dog} /></NavLink> 
        <NavLink to="/#projects"> <Cards title="Notes app" imgUrl={notes}/></NavLink>
        <NavLink to="/#projects"> <Cards  title="Burger builder" imgUrl={Burger}/></NavLink>
        <NavLink to="/#projects"> <Cards  title="Weather app" imgUrl={weather}/></NavLink>
      </div>
    </div>
  );
}

export default Projects;
