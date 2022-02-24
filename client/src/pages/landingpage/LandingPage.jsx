import React from "react";
import "./landingpage.scss";
import { useNavigate } from "react-router-dom";
import video from "../../assets/ae5991dc05cb085797dcdaf78d9dd81c.mp4";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleOnclick = () => {
    navigate("/home");
  };

  return (
    <div className="landing">
      <video
        autoPlay
        loop
        muted
        className="video"
        onClick={handleOnclick}
        style={{
          marginLeft: "60px",
          width: "90%",
          height: "1500px",
          objectFit: "cover",
        }}
      >
        <source src={video} type="video/mp4" />¿
      </video>
    </div>
  );
};

export default LandingPage;
