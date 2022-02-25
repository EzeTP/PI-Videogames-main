import React from "react";
import "./loading.scss";
import img from "../../assets/ZkIX.gif";
import img2 from "../../assets/st1.gif";
import img3 from "../../assets/st2.gif";
import img4 from "../../assets/st3.gif";
import img5 from "../../assets/X9Yq.gif";
import img6 from "../../assets/X9Yq.gif";
import img7 from "../../assets/X9Yq.gif";
import img8 from "../../assets/X9Yq.gif";
import img9 from "../../assets/X9Yq.gif";
import img10 from "../../assets/X9Yq.gif";
import img11 from "../../assets/X9Yq.gif";

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
