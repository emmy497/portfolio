import React from "react";
import "./Projects.css";
import Cards from "../Cards/Cards";
import sky from "../../assets/images/ethan-hoover-eIVJAkj1uCs-unsplash.jpg";
import image2 from "../../assets/images/stars.jpg";
import dog from "../../assets/images/dog.jpg";
import notes from "../../assets/images/notes.jpg";
import weather from "../../assets/images/weather.jpg";
import Burger from "../../assets/images/burger.jpg";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

function Projects() {
  const alertComingSoon = (projectName) => {
    toast.error( `${projectName} coming soon`, {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  return (
    <div id="projects" className="projects">
      <h4>Projects</h4>
      <div className="projects_container">
        <NavLink to="https://dogstore.vercel.app/" target="_blank">
          <Cards title="Dog store" imgUrl={dog} />
        </NavLink>
        <NavLink to="/#projects" onClick={()=> alertComingSoon("Notes app")}>
          <Cards title="Notes app" imgUrl={notes} />
        </NavLink>
        <NavLink to="/#projects" onClick={()=> alertComingSoon("Burger app")}>
          <Cards title="Burger builder" imgUrl={Burger} />
        </NavLink>
        <NavLink to="/#projects" onClick={()=> alertComingSoon("Weather app")}>
          <Cards title="Weather app" imgUrl={weather} />
        </NavLink>
      </div>
    </div>
  );
}


export default Projects;
