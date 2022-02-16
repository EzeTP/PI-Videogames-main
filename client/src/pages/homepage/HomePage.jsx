import React from "react";
import "./homepage.scss";
import GameCards from "../../components/gamecards/GameCards";

const HomePage = () => {
  return (
    <div className="home">
      <h1>Hello</h1>
      <div className="container">
        <GameCards />
      </div>
    </div>
  );
};

export default HomePage;
