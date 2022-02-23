import React from "react";
import "./loading.scss";
import img from "../../assets/ZkIX.gif";
import img2 from "../../assets/33HU.gif";
import img3 from "../../assets/hound-dog.gif";
import img4 from "../../assets/X9Yq.gif";

const Loading = () => {
  let arr = [img, img2, img3, img4];
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
