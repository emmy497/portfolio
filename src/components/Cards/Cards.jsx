import React from "react";
import "./Cards.css";

function Cards({ title, imgUrl }) {
  const style = {
  }
  return (
    <div className="cards">
      <div className="card-image">
       <img src={imgUrl} alt="" />
      </div>
      <h3>{title}</h3>
    </div>
  );
}

export default Cards;
