import React from "react";
import "./landingpage.scss";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing">
      <h1>Hello There</h1>
      <Link to="/home">
        <button>Enter</button>
      </Link>
    </div>
  );
};

export default LandingPage;
