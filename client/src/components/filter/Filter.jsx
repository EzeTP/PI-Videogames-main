import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterApi,
  filterDb,
  filterGender,
  getAllGenres,
} from "../../redux/actions/actions";

const Filter = () => {
  const genre = useSelector((state) => state.genres);
  const dispatch = useDispatch();

  const handleGenre = (e) => {
    if (e.target.value) {
      dispatch(filterGender(e.target.value));
    }
  };

  const handleApiorDb = (e) => {
    if (e.target.value === "api") {
      dispatch(filterApi("api"));
    } else if (e.target.value === "db") {
      dispatch(filterDb("db"));
    } else if (e.target.value === "All") {
      dispatch(filterGender("All"));
    }
  };
  useEffect(() => {
    dispatch(getAllGenres());
  }, [dispatch]);

  return (
    <div className="Container">
      <div className="containerGames">
        <select
          className="apiordb"
          defaultValue={"default"}
          onChange={handleApiorDb}
        >
          <option value="All">ALL</option>
          <option value="api">API</option>
          <option value="db">DB</option>
        </select>
      </div>
      <div className="containerGenres">
        <select
          className="genres"
          defaultValue={"default"}
          onChange={handleGenre}
        >
          <option value="All">ALL</option>
          {genre.map((e) => {
            return <option key={e.id}>{e.name}</option>;
          })}
        </select>
      </div>
    </div>
  );
};

export default Filter;
