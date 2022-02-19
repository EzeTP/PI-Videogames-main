import React from "react";
import "./gamecard.scss";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getDetail } from "../../redux/actions/actions";

const GameCard = ({ id, name, rating, genres, img }) => {
  console.log(rating, genres);
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
