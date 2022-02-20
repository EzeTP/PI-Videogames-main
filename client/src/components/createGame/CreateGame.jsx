import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createGame, getAllGenres } from "../../redux/actions/actions";
import { useNavigate } from "react-router-dom";

const CreateGame = () => {
  const genre = useSelector((state) => state.genres);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [value, setValues] = useState({
    name: "",
    description: "",
    released: "",
    rating: "",
    platforms: [],
    image: "",
    genres: [],
  });

  const handlePlatSelec = (e) => {
    if (value.platforms.includes(e.target.value)) {
      let plats = value.platforms.filter((p) => p !== e.target.value);
      setValues({
        ...value,
        platforms: plats,
      });
    } else {
      setValues({
        ...value,
        platforms: [...value.platforms, e.target.value],
      });
    }
  };

  const handleGenSelec = (e) => {
    if (value.genres.includes(e.target.value)) {
      let genr = value.genres.filter((p) => p !== e.target.value);
      setValues({
        ...value,
        genres: genr,
      });
    } else {
      setValues({
        ...value,
        genres: [...value.genres, e.targe.value],
      });
    }
  };

  const handleOnChange = (e) => {
    setValues({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(createGame(value));
    navigate.push("/videogames");
  };

  useEffect(() => {
    dispatch(getAllGenres());
  }, [dispatch]);

  return (
    <div className="Container">
      <form className="formContainer" onSubmit={handleOnSubmit}>
        <div>
          <label> Name</label>
        </div>
        <input
          title="Name"
          required
          type="text"
          className="nameForm"
          placeholder="Name of the game"
          value={value.name}
          onChange={handleOnChange}
          name="name"
        />
        <div>
          <label> Released Date</label>
        </div>
        <input
          title="Released"
          required
          type="date"
          className="releasedForm"
          placeholder="xxxx-xx-xx"
          value={value.released}
          onChange={handleOnChange}
          name="released"
          maxLength="11"
        />
        <div>
          <label> Rating </label>
        </div>
        <input
          title="Rating"
          required
          type="number"
          className="ratingForm"
          placeholder="0 - 10"
          value={value.rating}
          onChange={handleOnChange}
          name="rating"
        />
        <div>
          <label> Image </label>
        </div>
        <input
          title="Image"
          required
          type="text"
          className="imageForm"
          placeholder="http://"
          value={value.image}
          onChange={handleOnChange}
          name="image"
        />
        <div>
          <label> Description </label>
        </div>
        <textarea
          required
          className="descriptionForm"
          placeholder="A brief description of the game"
          rows="20"
          cols="50"
          value={value.description}
          name="description"
          onChange={handleOnChange}
          maxLength="500"
          title="maximo 2000 caracteres"
        ></textarea>
        <div className="genresForm">
          <div>
            <label> Genres </label>
          </div>
          <select
            title="at least 1 opcion"
            required
            multiple
            className="genresForm"
            name="genres"
            value={value.genres}
            onChange={handleGenSelec}
          >
            {
              (console.log(genre),
              value.genres.length <= 7 ? (
                genre.map((e) => {
                  return (
                    <option key={e.id} value={e.name}>
                      {e.name}
                    </option>
                  );
                })
              ) : (
                <option disabled></option>
              ))
            }
          </select>
        </div>
      </form>
    </div>
  );
};

export default CreateGame;
