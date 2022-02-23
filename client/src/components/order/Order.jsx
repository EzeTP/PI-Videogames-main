import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  FilterByOrder,
  ratingAsc,
  ratingDesc,
  sortAsc,
  sortDesc,
} from "../../redux/actions/actions";
import "./order.scss";

const Order = () => {
  let dispatch = useDispatch();

  /*  const handleOnChange = (e) => {
    if (e.target.value === "asc") {
      dispatch(sortAsc("asc"));
    } else if (e.target.value === "desc") {
      dispatch(sortDesc("desc"));
    } else if (e.target.value === "ratingAsc") {
      dispatch(ratingAsc("ratingAsc"));
    } else if (e.target.value === "ratingDesc") {
      dispatch(ratingDesc("ratingDesc"));
    }
  }; */

  const handleAlph = (e) => {
    if (e.target.value === "a-z") {
      dispatch(FilterByOrder("a-z"));
    } else if (e.target.value === "z-a") {
      dispatch(FilterByOrder("z-a"));
    } else if (e.target.value === "") {
      dispatch(FilterByOrder(""));
    } else if (e.target.value === "asc") {
      dispatch(ratingAsc("asc"));
    } else if (e.target.value === "desc") {
      dispatch(ratingAsc("desc"));
    }
  };

  return (
    <div>
      <select defaultValue={"default"} onChange={handleAlph}>
        <option value="">ASC | DESC</option>
        <option value="a-z"> A TO Z</option>
        <option value="z-a">Z TO A</option>
        <option value="asc"> ASC </option>
        <option value="desc"> DESC</option>
      </select>
    </div>
  );
};

export default Order;
