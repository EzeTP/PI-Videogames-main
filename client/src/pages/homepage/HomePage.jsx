import React from "react";
import "./homepage.scss";
import GameCards from "../../components/gamecards/GameCards";
import SearchBar from "../../components/searchbar/SearchBar";
import Order from "../../components/order/Order";
import Filter from "../../components/filter/Filter";

const HomePage = () => {
  return (
    <div className="home">
      <h1>Hello</h1>
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
