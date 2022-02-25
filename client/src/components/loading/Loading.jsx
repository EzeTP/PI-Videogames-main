import React from "react";
import "./loading.scss";
import img from "../../assets/ZkIX.gif";
import img3 from "../../assets/st2.gif";
import img5 from "../../assets/st4.gif";
import img6 from "../../assets/st5.gif";
import img7 from "../../assets/st6.gif";
import img8 from "../../assets/st7.gif";
import img9 from "../../assets/st8.gif";
import img11 from "../../assets/st10.gif";

const Loading = () => {
  let arr = [img, img3, img5, img6, img7, img8, img9, img11];
  return (
    <div className="containerLoading">
      <div className="container">
        <div className="loader"></div>
        <p className="message">Loading...</p>
      </div>
      <div className="ImgContainer">
        <img src={arr[Math.floor(Math.random() * arr.length)]} alt="" />
      </div>
    </div>
  );
};

export default Loading;
