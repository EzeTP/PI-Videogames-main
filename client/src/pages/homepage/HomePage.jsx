import React from "react";
import "./homepage.scss";
import GameCards from "../../components/gamecards/GameCards";
import SearchBar from "../../components/searchbar/SearchBar";
import Order from "../../components/order/Order";
import Filter from "../../components/filter/Filter";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate("/create");
  };

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="home">
      <div className="searchContainer">
        <span className="span1" onClick={handleClick}>
          VideoGames Project by EzeTP
        </span>
        <Filter />
        <Order />
        <SearchBar />
        <span className="span2" onClick={handleOnClick}>
          Create a new game!
        </span>
      </div>
      <div className="container">
        <GameCards />
      </div>
    </div>
  );
};

export default HomePage;
