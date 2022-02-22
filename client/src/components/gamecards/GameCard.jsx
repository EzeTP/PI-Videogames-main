import React from "react";
import "./gamecard.scss";
import { Link, useNavigate } from "react-router-dom";

const GameCard = ({ id, name, rating, genres, img }) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(`/detail/${id}`);
  };
  return (
    <div className="cards" onClick={handleOnClick}>
      {/* <Link to={`/detail/${id}`} key={id}></Link> */}
      <div className="card">
        <img src={img} alt="img not found" />
        <figcaption>
          <span>{name}</span>
          <span>
            {rating < 2
              ? "⭐"
              : rating < 3
                ? "⭐⭐"
                : rating < 4
                  ? "⭐⭐⭐"
                  : rating < 5
                    ? "⭐⭐⭐⭐"
                    : "⭐⭐⭐⭐⭐"}
          </span>
          <span>{genres.join(", ")}</span>
        </figcaption>
      </div>
    </div>
  );
};

export default GameCard;
