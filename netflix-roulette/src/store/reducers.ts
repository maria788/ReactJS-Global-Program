import { combineReducers } from "redux";
import { ActionNames } from "./data";
import { MoviesActions } from "./interfaces";
import { initialState } from "./data";

const fetcherReducer = (state = initialState, action: MoviesActions) => {
  console.log(action);
  switch (action.type) {
    case ActionNames.FETCH_MOVIES_REQUEST:
      return { ...state, loading: true };
    case ActionNames.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.payload.movies,
        error: null,
      };
    case ActionNames.FETCH_MOVIES_ERROR:
      return {
        ...state,
        loading: false,
        movies: [],
        error: action.payload.error,
      };
    case ActionNames.FILTER_MOVIES:
      return {
        ...state,
        searchText: action.payload.searchText,
        selectedGenre: action.payload.selectedGenre,
      };
    case ActionNames.SORT_MOVIES:
      return {
        ...state,
        sortBy: action.payload.sortBy,
      };
    case ActionNames.SET_IS_ADD_MOVIE_DIALOG_VISIBLE:
      return {
        ...state,
        isAddMovieDialogVisible: action.payload.isAddMovieDialogVisible,
      };
    case ActionNames.SET_MOVIE_TO_EDIT:
      return {
        ...state,
        movieToEdit: action.payload.movie,
      };
    case ActionNames.SET_MOVIE_TO_VIEW:
      return {
        ...state,
        movieToView: action.payload.movie,
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  moviesState: fetcherReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
