import { MoviesState } from "@store/interfaces";
import { GenreType } from "@utils/constants";

export const initialState: MoviesState = {
  loading: false,
  movies: [],
  error: null,
  selectedGenre: GenreType.ALL,
  searchText: "",
  isAddMovieDialogVisible: false,
  movieToEdit: null,
  movieToView: null,
  sortBy: "release_date",
};

export const ActionNames = {
  FETCH_MOVIES_REQUEST: "FETCH_MOVIES_REQUEST",
  FETCH_MOVIES_SUCCESS: "FETCH_MOVIES_SUCCESS",
  FETCH_MOVIES_ERROR: "FETCH_MOVIES_ERROR",
  FILTER_MOVIES: "FILTER_MOVIES",
  SORT_MOVIES: "SORT_MOVIES",
  SET_IS_ADD_MOVIE_DIALOG_VISIBLE: "SET_IS_ADD_MOVIE_DIALOG_VISIBLE",
  SET_MOVIE_TO_EDIT: "SET_MOVIE_TO_EDIT",
  SET_MOVIE_TO_VIEW: "SET_MOVIE_TO_VIEW",
};
