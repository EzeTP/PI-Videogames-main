import { FETCH_GAMES } from "../actions/actions";

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

    default:
      return state;
  }
}
