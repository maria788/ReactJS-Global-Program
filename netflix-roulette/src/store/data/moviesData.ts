import { MoviesInterface } from "@store/interfaces";
import { GenreType } from "@utils/constants";

export const moviesInitialState: MoviesInterface = {
  loading: false,
  movies: [],
  error: null,
  selectedGenre: GenreType.ALL,
  searchText: "",
  sortBy: "release_date",
};

export const MoviesActionNames = {
  FETCH_MOVIES_REQUEST: "FETCH_MOVIES_REQUEST",
  FETCH_MOVIES_SUCCESS: "FETCH_MOVIES_SUCCESS",
  FETCH_MOVIES_ERROR: "FETCH_MOVIES_ERROR",
  FILTER_MOVIES: "FILTER_MOVIES",
  SORT_MOVIES: "SORT_MOVIES",
  ADD_MOVIE: "ADD_MOVIE",
  ADD_EDIT_MOVIE_SUCCESS: "ADD_EDIT_MOVIE_SUCCESS",
  ADD_EDIT_MOVIE_ERROR: "ADD_EDIT_MOVIE_ERROR",
  EDIT_MOVIE: "EDIT_MOVIE",
  DELETE_MOVIE: "DELETE_MOVIE",
  DELETE_MOVIE_SUCCESS: "DELETE_MOVIE_SUCCESS",
  DELETE_MOVIE_ERROR: "DELETE_MOVIE_ERROR",
};
