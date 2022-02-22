import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createGame, getAllGenres } from "../../redux/actions/actions";
import { useNavigate } from "react-router-dom";
import "./createGame.scss";

const CreateGame = () => {
  const genre = useSelector((state) => state.genres);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(genre);
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
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(createGame(values));
    navigate("/home");
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
            <label> Name</label>
          </div>
          <input
            title="Name"
            required
            type="text"
            className="nameForm"
            placeholder="Name of the game"
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
            placeholder="0 - 5  "
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
            <label> Description </label>
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
                  Solo se Permiten Seleccionar de 1 a 6 Genders, Porfavor
                  elimina tu ultima opcion Seleccionada para completar el max de
                  Genders permitido. Al intenta superar el limite se bloquearan
                  las opciones, en caso de bloquearse Refresca la pagina
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
                  Solo se Permiten Seleccionar de 1 a 6 Plataformas, Porfavor
                  elimina tu ultima opcion Seleccionada para completar el max de
                  Platforms permitido. Al intenta superar el limite se
                  bloquearan las opciones, en caso de bloquearse Refresca la
                  Pagina
                </p>
              )}
            </label>
          </div>
          {values.platforms.length <= 6 && values.genres.length <= 6 ? (
            <button type="submit" className="boton">
              Guardar
            </button>
          ) : (
            <button type="submit" className="boton">
              Guardar{" "}
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default CreateGame;
