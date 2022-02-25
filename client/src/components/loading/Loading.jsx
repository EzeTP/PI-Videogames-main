import React from "react";
import "./loading.scss";
import img from "../../assets/ZkIX.gif";
import img4 from "../../assets/st3.gif";
import img5 from "../../assets/st4.gif";
import img6 from "../../assets/st5.gif";
import img7 from "../../assets/st6.gif";
import img8 from "../../assets/st7.gif";
import img10 from "../../assets/st9.gif";
import img11 from "../../assets/st10.gif";

const Loading = () => {
  let arr = [img, img4, img5, img6, img7, img8, img10, img11];
  return (
    <div className="containerLoading">
      <h1>LOADING...</h1>
      <div className="ImgContainer">
        <img src={arr[Math.floor(Math.random() * arr.length)]} alt="" />
      </div>
    </div>
  );
};

export default Loading;
