import React from "react";
import "./homepage.scss";
import GameCards from "../../components/gamecards/GameCards";
import SearchBar from "../../components/searchbar/SearchBar";
import { getByNames } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";
import Order from "../../components/order/Order";

const HomePage = () => {
  let dispatch = useDispatch();
  const handleOnSearch = (name) => {
    dispatch(getByNames(name));
  };

  return (
    <div className="home">
      <h1>Hello</h1>
      <div className="searchContainer">
        <SearchBar onSearch={handleOnSearch} />
      </div>
      <div>
        <Order />
      </div>
      <div className="container">
        <GameCards />
      </div>
    </div>
  );
};

export default HomePage;
