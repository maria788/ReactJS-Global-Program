import {
  FetchMoviesError,
  FetchMoviesErrorPayload,
  FetchMoviesRequest,
  FetchMoviesSuccess,
  FetchMoviesSuccessPayload,
  SetIsAddMovieDialogVisible,
  SetIsAddMovieDialogVisiblePayload,
  FilterMovies,
  FilterMoviesPayload,
  SetMovieToEditOrViewPayload,
  SetMovieToEditOrView,
  SortMoviesPayload,
  SortMovies,
} from "./interfaces";
import { ActionNames } from "./data";

export const fetchMoviesRequest = (): FetchMoviesRequest => ({
  type: ActionNames.FETCH_MOVIES_REQUEST,
});

export const fetchMoviesSuccess = (
  payload: FetchMoviesSuccessPayload
): FetchMoviesSuccess => ({
  type: ActionNames.FETCH_MOVIES_SUCCESS,
  payload,
});

export const fetchMoviesFailure = (
  payload: FetchMoviesErrorPayload
): FetchMoviesError => ({
  type: ActionNames.FETCH_MOVIES_ERROR,
  payload,
});

export const filterMovies = (payload: FilterMoviesPayload): FilterMovies => ({
  type: ActionNames.FILTER_MOVIES,
  payload,
});

export const sortMovies = (payload: SortMoviesPayload): SortMovies => ({
  type: ActionNames.SORT_MOVIES,
  payload,
});

export const setIsAddMovieDialogVisible = (
  payload: SetIsAddMovieDialogVisiblePayload
): SetIsAddMovieDialogVisible => ({
  type: ActionNames.SET_IS_ADD_MOVIE_DIALOG_VISIBLE,
  payload,
});

export const setMovieToEdit = (
  payload: SetMovieToEditOrViewPayload
): SetMovieToEditOrView => ({
  type: ActionNames.SET_MOVIE_TO_EDIT,
  payload,
});

export const setMovieToView = (
  payload: SetMovieToEditOrViewPayload
): SetMovieToEditOrView => {
  return {
    type: ActionNames.SET_MOVIE_TO_VIEW,
    payload,
  };
};
