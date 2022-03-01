import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createGame, getAllGenres } from "../../redux/actions/actions";
import { useNavigate } from "react-router-dom";
import "./createGame.scss";
import {
  regexrating,
  regexText,
  regexUrl,
  validateName,
  validateDescription,
} from "./validations";

const CreateGame = () => {
  const genre = useSelector((state) => state.genres);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    description: "",
    released: "",
    rating: "",
    platforms: [],
    image: "",
    genres: [],
  });

  const handlePlatSelec = (e) => {
    if (values.platforms.includes(e.target.value)) {
      let plats = values.platforms.filter((p) => p !== e.target.value);
      setValues({
        ...values,
        platforms: plats,
      });
    } else {
      setValues({
        ...values,
        platforms: [...values.platforms, e.target.value],
      });
    }
  };

  const handleGenSelec = (e) => {
    if (values.genres.includes(e.target.value)) {
      let genresSelected = values.genres.filter((p) => p !== e.target.value);
      setValues({
        ...values,
        genres: genresSelected,
      });
    } else {
      setValues({
        ...values,
        genres: [...values.genres, e.target.value],
      });
    }
  };

  const handleOnChange = (e) => {
    if (validateName(e.target.value))
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (values.name && values.rating < 5 && values.description) {
      dispatch(createGame(values));
      alert("juego creado");
      navigate("/home");
    } else {
      alert("faltan datos");
    }
  };

  useEffect(() => {
    dispatch(getAllGenres());
  }, [dispatch]);

  let plataformas = [
    "Pc",
    "Xbox Series S/X",
    "Xbox One",
    "Xbox 360",
    "Nintendo Switch",
    "Nintendo Wii",
    "Mac",
    "Linux",
    "Android",
    "IOS",
    "Playstation 5",
    "Playstation 4",
    "Playstation 3",
    "Playstation 2",
    "Playstation",
  ];

  return (
    <div className="Container">
      <div className="formContainer">
        <form onSubmit={handleOnSubmit}>
          <div>
            <label>Name</label>
          </div>
          <input
            title="Name"
            type="text"
            className="nameForm"
            placeholder="e.g 'Henrymon' "
            value={values.name}
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
            value={values.released}
            onChange={handleOnChange}
            name="released"
          />
          <div>
            <label> Rating </label>
          </div>
          <input
            title="Rating"
            required
            type="number"
            className="ratingForm"
            placeholder="0 - 5"
            value={values.rating}
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
            value={values.image}
            onChange={handleOnChange}
            name="image"
          />
          <div>
            <label>Description</label>
          </div>
          <textarea
            required
            className="descriptionForm"
            placeholder="A brief description of the game"
            rows="20"
            cols="50"
            value={values.description}
            name="description"
            onChange={handleOnChange}
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
              name="Genres"
              value={values.genres}
              onChange={handleGenSelec}
            >
              {values.genres.length <= 7 ? (
                genre.map((e) => {
                  return (
                    <option key={e.id} value={e.name}>
                      {e.name}
                    </option>
                  );
                })
              ) : (
                <option disabled></option>
              )}
            </select>
            <p>List:</p>
            <label className="cuadro-videogames-plataforms">
              {values.genres.length <= 6 ? (
                values.genres.map((g, i) => <div key={i}>{g}</div>)
              ) : (
                <p className="parrafo-genders-length">
                  Only 1 to 6 Genders are allowed to be Selected, Please Please
                  remove your last selected option to complete the maximum
                  number of Genders allowed. Attempting to exceed the limit will
                  block the the options will be blocked, in case of blocking
                  Refresh the page.
                </p>
              )}
            </label>
          </div>

          <div className="platformsForm">
            <div>
              <label> Platforms </label>
            </div>
            <select
              title="at least 1 option"
              required
              multiple
              className="platForm"
              name="platforms"
              value={values.platforms}
              onChange={handlePlatSelec}
            >
              {values.platforms.length <= 7 ? (
                plataformas.map((e) => {
                  return (
                    <option key={e.id} value={e}>
                      {e}
                    </option>
                  );
                })
              ) : (
                <option disabled></option>
              )}
            </select>
            <p>List:</p>
            <label className="cuadro-videogames-plataforms">
              {values.platforms.length <= 6 ? (
                values.platforms.map((p, i) => <div key={i}>{p}</div>)
              ) : (
                <p className="parrafo-genders-length">
                  Only 1 to 6 Platforms are allowed to be selected, Please
                  Please remove your last selected option to complete the max of
                  Platforms allowed. Platforms allowed. Attempting to exceed the
                  limit will options will be blocked, in case of blocking
                  Refresh the page.
                </p>
              )}
            </label>
          </div>
          {values.platforms.length <= 6 && values.genres.length <= 6 ? (
            <button type="submit" className="boton">
              Save!
            </button>
          ) : (
            <button type="submit" className="boton">
              Save!
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default CreateGame;
