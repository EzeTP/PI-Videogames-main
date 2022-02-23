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
  FILTER_ALPH,
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
        ...state,
        videogames: action.payload,
        videogamesDb: action.payload,
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

    case FILTER_ALPH:
      const Alph = state.videogames;
      const noRepeat = Alph.slice().sort((a, b) => {
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return 1;
        }
        if (b.name.toLowerCase() > a.name.toLowerCase()) {
          return -1;
        }
        return 0;
      });
      let sortedGames =
        action.payload === "a-z" ? noRepeat : noRepeat.reverse();
      return {
        ...state,
        videogames: action.payload === "" ? state.videogamesDb : sortedGames,
      };

    case RATING_ASC:
      const asc = state.videogames;
      const order = asc.slice().sort((a, b) => {
        if (Number(a.rating) > Number(b.rating)) {
          return 1;
        }
        if (Number(b.rating) > Number(a.rating)) {
          return -1;
        }
        return 0;
      });
      let sorting = action.payload === "asc" ? order : order.reverse();
      return {
        ...state,
        videogames: action.payload === "" ? state.videogamesDb : sorting,
      };
    default:
      return state;
  }
}
