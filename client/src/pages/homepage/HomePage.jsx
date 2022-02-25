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

  return (
    <div className="home">
      <div className="span">
        <span className="span1">EzeTP </span>
        <span className="span2" onClick={handleOnClick}>
          Create A Game!{" "}
        </span>
      </div>
      <div className="searchContainer">
        <Filter />
        <Order />
        <SearchBar />
      </div>
      <div className="container">
        <GameCards />
      </div>
    </div>
  );
};

export default HomePage;
