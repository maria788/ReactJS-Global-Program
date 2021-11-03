import {
  Error,
  ErrorPayload,
  FetchMoviesRequest,
  FetchMoviesSuccess,
  FetchMoviesSuccessPayload,
  FilterMovies,
  FilterMoviesPayload,
  SortMoviesPayload,
  SortMovies,
  AddOrEditMoviePayload,
  AddOrEditMovie,
  DeleteMoviePayload,
  DeleteMovie,
  Action,
} from "../interfaces";
import { MoviesActionNames } from "@store/data";

export const fetchMoviesRequest = (): FetchMoviesRequest => ({
  type: MoviesActionNames.FETCH_MOVIES_REQUEST,
});

export const fetchMoviesSuccess = (
  payload: FetchMoviesSuccessPayload
): FetchMoviesSuccess => ({
  type: MoviesActionNames.FETCH_MOVIES_SUCCESS,
  payload,
});

export const fetchMoviesError = (payload: ErrorPayload): Error => ({
  type: MoviesActionNames.FETCH_MOVIES_ERROR,
  payload,
});

export const filterMovies = (payload: FilterMoviesPayload): FilterMovies => ({
  type: MoviesActionNames.FILTER_MOVIES,
  payload,
});

export const sortMovies = (payload: SortMoviesPayload): SortMovies => ({
  type: MoviesActionNames.SORT_MOVIES,
  payload,
});

export const addMovie = (payload: AddOrEditMoviePayload): AddOrEditMovie => {
  return {
    type: MoviesActionNames.ADD_MOVIE,
    payload,
  };
};

export const editMovie = (payload: AddOrEditMoviePayload): AddOrEditMovie => {
  return {
    type: MoviesActionNames.EDIT_MOVIE,
    payload,
  };
};

export const addEditMovieSuccess = (): Action => ({
  type: MoviesActionNames.ADD_EDIT_MOVIE_SUCCESS,
});

export const addEditMovieError = (payload: ErrorPayload): Error => ({
  type: MoviesActionNames.ADD_EDIT_MOVIE_ERROR,
  payload,
});

export const deleteMovie = (payload: DeleteMoviePayload): DeleteMovie => {
  return {
    type: MoviesActionNames.DELETE_MOVIE,
    payload,
  };
};

export const deleteMovieSuccess = (): Action => {
  return {
    type: MoviesActionNames.DELETE_MOVIE_SUCCESS,
  };
};

export const deleteMovieError = (payload: ErrorPayload): Error => {
  return {
    type: MoviesActionNames.DELETE_MOVIE_ERROR,
    payload,
  };
};
