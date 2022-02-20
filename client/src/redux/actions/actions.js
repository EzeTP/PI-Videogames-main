import axios from "axios";
export const CREATE_GAME = "CREATE_GAME";
export const GET_GAMES_BY_NAME = "GET_GAMES_BY_NAME";
export const FETCH_GAMES = "FETCH_GAMES";
export const GET_DETAIL = "GET_DETAIL";
export const LOADING = "LOADING";
export const SEARCH_GAMES = "SEARCH_GAMES";
export const GET_GENRES = "GET_GENRES";
export const All_FILTERS = "ALL_FILTERS";
export const CLEAR_FILTERS = "CLEAR_FILTERS";
export const SORT_GAMES = "SORT_GAMES";
export const ASC = "ASC";
export const DESC = "DESC";
export const MIN = "MIN";
export const MAYOR = "MAYOR";

export const fetchAllGames = () => async (dispatch) => {
  try {
    let request = await axios.get(`http://localhost:3001/videogames`);
    const allgames = request.data;
    dispatch({ type: FETCH_GAMES, payload: allgames });
  } catch (err) {
    console.log(err);
  }
};

export const getAllGenres = () => async (dispatch) => {
  try {
    const request = await axios.get(`http://localhost:3001/genres`);
    const allGenres = request.data.result;
    dispatch({ type: GET_GENRES, payload: allGenres });
  } catch (err) {
    console.log(err);
  }
};

export const getFilter =
  (showDb = false) =>
  async (dispatch) => {
    try {
      const request = await axios.get(`http://localhost:3001/videogames`);
      let final;
      if (showDb === true) {
        final = request.data.filter((game) => {
          return game.id.toString().includes("-");
        });
      } else {
        final = request.data.filter((game) => {
          return typeof game.id === "number";
        });
      }
      dispatch({ type: All_FILTERS, payload: final });
    } catch (err) {
      console.log(err);
    }
  };
export const getByNames = (name) => async (dispatch) => {
  try {
    const request = await axios.get(
      `http://localhost:3001/videogames?name=${name}`
    );
    const names = request.data;
    dispatch({ type: GET_GAMES_BY_NAME, payload: names });
  } catch (err) {
    console.log(err);
  }
};

export const getDetail = (id) => async (dispatch) => {
  try {
    const request = await axios.get(`http://localhost:3001/videogames/${id}`);
    const data = request.data;
    dispatch({ type: GET_DETAIL, payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const createGame = (videogames) => async (dispatch) => {
  try {
    const request = await axios.get(
      `http://localhost:3001/videogames`,
      videogames
    );
    const data = request.data;
    dispatch({ type: CREATE_GAME, payload: data });
  } catch (err) {
    console.log(err);
  }
};
