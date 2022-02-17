import React from "react";
import "./gamecard.scss";

const GameCard = ({ id, name, rating, genres, img }) => {
  return (
    <div className="container2">
      <span>{name}</span>
      <span>{rating}</span>
      <span>{genres.join(", ")}</span>
      <img src={img} alt="img not found" />
    </div>
  );
};

export default GameCard;
