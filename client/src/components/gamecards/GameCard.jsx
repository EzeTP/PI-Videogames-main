import React from "react";
import "./gamecard.scss";
import { Link } from "react-router-dom";

const GameCard = ({ id, name, rating, genres, img }) => {
  return (
    <div className="container2">
      <Link to={`/detail/${id}`} key={id}>
        <span>{name}</span>
        <span>{rating}</span>
        <span>{genres.join(", ")}</span>
        <img src={img} alt="img not found" />
      </Link>
    </div>
  );
};

export default GameCard;
