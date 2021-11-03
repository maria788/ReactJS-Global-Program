import {
  FetchMoviesErrorPayload,
  FetchMoviesRequest,
  FetchMoviesSuccessPayload,
  SetIsAddMovieDialogVisiblePayload,
  FilterMoviesPayload,
  SetMovieToEditOrViewPayload,
  SortMoviesPayload,
} from "./interfaces";
import { ActionNames } from "./data";

export const fetchMoviesRequest = (): FetchMoviesRequest => ({
  type: ActionNames.FETCH_MOVIES_REQUEST,
});

export const fetchMoviesSuccess = ({ movies }: FetchMoviesSuccessPayload) => ({
  type: ActionNames.FETCH_MOVIES_SUCCESS,
  payload: movies,
});

export const fetchMoviesFailure = ({ error }: FetchMoviesErrorPayload) => ({
  type: ActionNames.FETCH_MOVIES_ERROR,
  payload: error,
});

export const filterMovies = ({
  searchText,
  selectedGenre,
}: FilterMoviesPayload) => ({
  type: ActionNames.FILTER_MOVIES,
  payload: { searchText, selectedGenre },
});

export const sortMovies = ({ sortBy }: SortMoviesPayload) => ({
  type: ActionNames.SORT_MOVIES,
  payload: sortBy,
});

export const setIsAddMovieDialogVisible = ({
  isAddMovieDialogVisible,
}: SetIsAddMovieDialogVisiblePayload) => ({
  type: ActionNames.SET_IS_ADD_MOVIE_DIALOG_VISIBLE,
  payload: isAddMovieDialogVisible,
});

export const setMovieToEdit = ({ movie }: SetMovieToEditOrViewPayload) => ({
  type: ActionNames.SET_MOVIE_TO_EDIT,
  payload: movie,
});

export const setMovieToView = ({ movie }: SetMovieToEditOrViewPayload) => {
  return {
    type: ActionNames.SET_MOVIE_TO_VIEW,
    payload: movie,
  };
};

export const setMovieToDelete = ({ movie }: SetMovieToEditOrViewPayload) => ({
  type: ActionNames.SET_MOVIE_TO_DELETE,
  payload: movie,
});
