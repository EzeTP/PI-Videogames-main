import { useDispatch } from "react-redux";
import { getByNames } from "../../redux/actions/actions";
import "./searchbar.scss";

const SearchBar = () => {
  function handleOnSearch(e) {
    handleSearch(e.target.value);
  }

  let dispatch = useDispatch();

  const handleSearch = (name) => {
    dispatch(getByNames(name));
  };

  return (
    <div>
      <input
        id="Search"
        type="text"
        className="search"
        autoComplete="off"
        placeholder="Search..."
        onChange={handleOnSearch}
      />
    </div>
  );
};

export default SearchBar;
