import { MoviesActions } from "../interfaces";
import { MoviesActionNames } from "../data";
import { moviesInitialState } from "@store/data/moviesData";

export const moviesReducer = (
  state = moviesInitialState,
  action: MoviesActions
) => {
  switch (action.type) {
    case MoviesActionNames.FETCH_MOVIES_REQUEST:
      return { ...state, loading: true };
    case MoviesActionNames.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.payload.movies,
        error: null,
      };
    case MoviesActionNames.FETCH_MOVIES_ERROR:
      return {
        ...state,
        loading: false,
        movies: [],
        error: action.payload.error,
      };
    case MoviesActionNames.FILTER_MOVIES:
      return {
        ...state,
        searchText: action.payload.searchText,
        selectedGenre: action.payload.selectedGenre,
      };
    case MoviesActionNames.SORT_MOVIES:
      return {
        ...state,
        sortBy: action.payload.sortBy,
      };
    case MoviesActionNames.ADD_MOVIE:
    case MoviesActionNames.EDIT_MOVIE:
      return {
        ...state,
        movie: action.payload.movie,
      };
    case MoviesActionNames.DELETE_MOVIE:
      return {
        ...state,
        movieId: action.payload.movieId,
      };
    default:
      return state;
  }
};
