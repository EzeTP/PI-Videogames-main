import {
  FETCH_GAMES,
  All_FILTERS,
  GET_GAMES_BY_NAME,
} from "../actions/actions";

const initialState = {
  videogames: [],
  genres: [],
  gameDetail: {},
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_GAMES:
      return {
        ...state,
        videogames: [...state.videogames, ...action.payload],
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

    default:
      return state;
  }
}
