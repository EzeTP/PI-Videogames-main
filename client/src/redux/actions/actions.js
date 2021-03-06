import axios from "axios";
export const CREATE_GAME = "CREATE_GAME";
export const GET_GAMES_BY_NAME = "GET_GAMES_BY_NAME";
export const FETCH_GAMES = "FETCH_GAMES";
export const GET_DETAIL = "GET_DETAIL";
export const GET_GENRES = "GET_GENRES";
export const RATING_ASC = "RATING_ASC";
export const FILTER_GENRE = "FILTER_GENRE";
export const FILTER_API = "FILTER_API";
export const FILTER_DB = "FILTER_DB";
export const FILTER_ALPH = "FILTER_ALPH";
/* export const PROBANDO = "PROBANDO"; */

export const fetchAllGames = () => async (dispatch) => {
  try {
    let request = await axios.get(`/videogames`);
    const allgames = request.data;
    dispatch({ type: FETCH_GAMES, payload: allgames });
  } catch (err) {
    console.log(err);
  }
};

export const getAllGenres = () => async (dispatch) => {
  try {
    const request = await axios.get(`/genres`);
    const allGenres = request.data;
    dispatch({ type: GET_GENRES, payload: allGenres });
  } catch (err) {
    console.log(err);
  }
};

export const getByNames = (name) => async (dispatch) => {
  try {
    const request = await axios.get(`/videogames?name=${name}`);
    const names = request.data;
    dispatch({ type: GET_GAMES_BY_NAME, payload: names });
  } catch (err) {
    console.log(err);
  }
};

export const getDetail = (id) => async (dispatch) => {
  try {
    const request = await axios.get(`/videogames/${id}`);
    const data = request.data;
    dispatch({ type: GET_DETAIL, payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const createGame = (videogames) => async (dispatch) => {
  try {
    const request = await axios.post(`/videogames`, videogames);
    const data = request.data;
    dispatch({ type: CREATE_GAME, payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const FilterByOrder = (order) => async (dispatch) => {
  dispatch({ type: FILTER_ALPH, payload: order });
};

export const ratingAsc = (order) => async (dispatch) => {
  dispatch({ type: RATING_ASC, payload: order });
};

export const filterGenre = (genre) => async (dispatch) => {
  dispatch({ type: FILTER_GENRE, payload: genre });
};

export const filterApi = (api) => {
  return { type: FILTER_API, payload: api };
};

export const filterDb = (db) => {
  return { type: FILTER_DB, payload: db };
};
/* 
export const probando = (e) => {
  return { type: PROBANDO, payload: e };
}; */
