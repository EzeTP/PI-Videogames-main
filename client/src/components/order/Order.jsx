import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  ratingAsc,
  ratingDesc,
  sortAsc,
  sortDesc,
} from "../../redux/actions/actions";

const Order = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  const handleOnChange = (e) => {
    if (e.target.value === "asc") {
      dispatch(sortAsc("asc"));
      navigate("/home");
    } else if (e.target.value === "desc") {
      dispatch(sortDesc("desc"));
      navigate("/home");
    } else if (e.target.value === "ratingAsc") {
      dispatch(ratingAsc("ratingAsc"));
      navigate("/home");
    } else if (e.target.value === "ratingDesc") {
      dispatch(ratingDesc("ratingDesc"));
      navigate("/home");
    }
  };
  /* useEffect(() => {}, []); */

  return (
    <div>
      <select defaultValue={"default"} onChange={(e) => handleOnChange(e)}>
        <option value="default">ASC | DESC</option>
        <option value="asc"> A TO Z</option>
        <option value="desc">Z TO A</option>
        <option value="ratingAsc"> RATING ASC </option>
        <option value="ratingDesc"> RATING DESC</option>
      </select>
    </div>
  );
};

export default Order;
