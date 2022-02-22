import Order from "../../components/order/Order";
import {
  FETCH_GAMES,
  All_FILTERS,
  GET_GAMES_BY_NAME,
  GET_DETAIL,
  CREATE_GAME,
  GET_GENRES,
  ASC,
  DESC,
  RATING_ASC,
  RATING_DESC,
  FILTER_GENRE,
  FILTER_API,
  FILTER_DB,
} from "../actions/actions";

const initialState = {
  videogames: [],
  genres: [],
  gameDetail: {},
  createGame: {},
  videogamesDb: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_GAMES:
      return {
        /* ...state,
        videogamesDb: ...state.videogames, ...action.payload],
        videogames: ...state.videogames, ...action.payload], */
        ...state,
        videogames: action.payload,
        videogamesDb: action.payload,
      };
    case All_FILTERS:
      return {
        ...state,
        videogames: action.payload.sort((a, b) => {
          if (a.name > b.name) return 1;
          if (a.name < b.name) return -1;
          return 0;
        }),
      };
    case GET_GAMES_BY_NAME:
      return {
        ...state,
        videogames: action.payload,
      };
    case GET_DETAIL:
      return {
        ...state,
        gameDetail: action.payload,
      };
    case CREATE_GAME:
      return {
        ...state,
        createGame: action.payload,
      };

    case GET_GENRES:
      return {
        ...state,
        genres: action.payload,
      };

    case ASC:
      let sort = state.videogames.sort((a, b) =>
        a.name.toLowerCase().localeCompare(b.name.toLowerCase())
      );
      return {
        ...state,
        videogames: sort,
      };

    case DESC:
      let sorted = state.videogames.sort((a, b) =>
        b.name.toLowerCase().localeCompare(a.name.toLowerCase())
      );
      return {
        ...state,
        videogames: sorted,
      };
    case RATING_ASC:
      let ratingSort = state.videogames.sort((a, b) => a.rating - b.rating);
      return {
        ...state,
        videogames: ratingSort,
      };
    case RATING_DESC:
      let ratingSorted = state.videogames.sort((a, b) => b.rating - a.rating);
      return {
        ...state,
        videogames: ratingSorted,
      };

    case FILTER_GENRE:
      const alljuegos = state.videogamesDb;
      const generos = alljuegos.filter(
        (c) =>
          c.Genres?.find((c) => c.name === action.payload) ||
          c.genres?.find((c) => c.name === action.payload)
      );
      const statusFiltered = action.payload === "All" ? alljuegos : generos;
      return {
        ...state,
        videogames: statusFiltered,
      };

    case FILTER_API:
      let api = state.videogamesDb.filter((e) => Number.isInteger(e.id));
      return {
        ...state,
        videogames: api,
      };

    case FILTER_DB:
      let db = state.videogamesDb.filter((e) => !Number.isInteger(e.id));
      return {
        ...state,
        videogames: db.length === 0 ? "empty" : db,
      };
    default:
      return state;
  }
}
