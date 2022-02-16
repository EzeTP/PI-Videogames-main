import axios from "axios";

export const FETCH_GAMES = "FETCH_GAMES";
export const GET_DETAIL = "GET_DETAIL";
export const LOADING = "LOADING";
export const SEARCH_GAMES = "SEARCH_GAMES";
export const GET_GENRES = "GET_GENRES";
export const All_FILTERS = "ALL_FILTERS";
export const CLEAR_FILTERS = "CLEAR_FILTERS";

export function fetchAllGames() {
  return async function (dispatch) {
    try {
      const request = await axios.get(
        `http://localhost:3001/videogames?page=1`
      );
      const allgames = request.data;
      dispatch({ type: FETCH_GAMES, payload: allgames });
    } catch (err) {
      console.log(err);
    }
  };
}
