import { useDispatch } from "react-redux";
import {
  FilterByOrder,
  probando,
  ratingAsc,
} from "../../redux/actions/actions";
import "./order.scss";

const Order = () => {
  let dispatch = useDispatch();

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
    } /*  else if (e.target.value === "meta") {
      dispatch(probando("meta"));
    } */
  };

  return (
    <div>
      <select defaultValue={"default"} onChange={handleAlph}>
        <option value=""> ALL </option>
        <option value="a-z"> A TO Z</option>
        <option value="z-a">Z TO A</option>
        <option value="asc"> Asc Rating </option>
        <option value="desc"> Dec Rating </option>
        {/*         <option value="meta"> Dec Rating </option> */}
      </select>
    </div>
  );
};

export default Order;
