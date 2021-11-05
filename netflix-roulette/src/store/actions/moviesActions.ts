import {
  ErrorPayload,
  FetchMoviesSuccessPayload,
  AddOrEditMoviePayload,
  DeleteMoviePayload,
  Action,
  FetchMoviesPayload,
} from "../interfaces";
import { MoviesActionNames } from "@store/data";

export const fetchMoviesRequest = (payload?: FetchMoviesPayload) => ({
  type: MoviesActionNames.FETCH_MOVIES_REQUEST,
  payload,
});

export const fetchMoviesSuccess = ({ movies }: FetchMoviesSuccessPayload) => ({
  type: MoviesActionNames.FETCH_MOVIES_SUCCESS,
  payload: movies,
});

export const requestError = ({ error }: ErrorPayload) => ({
  type: MoviesActionNames.FETCH_MOVIES_ERROR,
  payload: error,
});

export const addMovie = ({ movie }: AddOrEditMoviePayload) => {
  return {
    type: MoviesActionNames.ADD_MOVIE,
    payload: movie,
  };
};

export const editMovie = ({ movie }: AddOrEditMoviePayload) => {
  return {
    type: MoviesActionNames.EDIT_MOVIE,
    payload: movie,
  };
};

export const addEditMovieSuccess = (): Action => ({
  type: MoviesActionNames.ADD_EDIT_MOVIE_SUCCESS,
});

export const deleteMovie = ({ movieId }: DeleteMoviePayload) => {
  return {
    type: MoviesActionNames.DELETE_MOVIE,
    payload: movieId,
  };
};

export const deleteMovieSuccess = (): Action => {
  return {
    type: MoviesActionNames.DELETE_MOVIE_SUCCESS,
  };
};
