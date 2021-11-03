import "@babel/polyfill";
import { all, call, put, takeLatest, fork } from "redux-saga/effects";
import {
  addEditMovieError,
  addEditMovieSuccess,
  deleteMovieError,
  deleteMovieSuccess,
  fetchMoviesError,
  fetchMoviesRequest,
  fetchMoviesSuccess,
} from "./actions";
import {
  getMovies,
  getFilteredAndSortedMovies,
  getSortedMovies,
  addMovie,
  editMovie,
  deleteMovie,
} from "./movies.api";
import { MoviesActionNames } from "./data";
import { GenreType } from "@utils/constants";
import { Movie } from "@utils/interface";
import { AxiosResponse } from "axios";
import { MoviesActions } from "./interfaces";

function* fetchMoviesSaga() {
  try {
    const response: AxiosResponse<{ data: Movie[] }> = yield call(getMovies);

    yield put(
      fetchMoviesSuccess({
        movies: response.data.data,
      })
    );
  } catch (e) {
    yield put(
      fetchMoviesError({
        error: e.message,
      })
    );
  }
}

function* fetchFilteredAndSortedMoviesSaga(action: MoviesActions) {
  try {
    const response: AxiosResponse<{ data: Movie[] }> =
      action.payload.selectedGenre === GenreType.ALL
        ? yield call(getFilteredAndSortedMovies, {
            search: action.payload.searchText,
          })
        : yield call(getFilteredAndSortedMovies, {
            filter: action.payload.selectedGenre,
            search: action.payload.searchText,
          });

    yield put(
      fetchMoviesSuccess({
        movies: response.data.data,
      })
    );
  } catch (e) {
    yield put(
      fetchMoviesError({
        error: e.message,
      })
    );
  }
}

function* sortMoviesSaga(action: MoviesActions) {
  try {
    const response: AxiosResponse<{ data: Movie[] }> = yield call(
      getSortedMovies,
      {
        sortBy: action.payload.sortBy,
      }
    );

    yield put(
      fetchMoviesSuccess({
        movies: response.data.data,
      })
    );
  } catch (e) {
    yield put(
      fetchMoviesError({
        error: e.message,
      })
    );
  }
}

function* addMovieSaga(action: MoviesActions) {
  try {
    yield call(addMovie, action.payload.movie);

    yield put(addEditMovieSuccess());
    yield put(fetchMoviesRequest());
  } catch (e) {
    yield put(
      addEditMovieError({
        error: e.message,
      })
    );
  }
}

function* editMovieSaga(action: MoviesActions) {
  try {
    yield call(editMovie, action.payload.movie);

    yield put(addEditMovieSuccess());
    yield put(fetchMoviesRequest());
  } catch (e) {
    yield put(
      addEditMovieError({
        error: e.message,
      })
    );
  }
}

function* deleteMovieSaga(action: MoviesActions) {
  try {
    yield call(deleteMovie, action.payload.movieId);

    yield put(deleteMovieSuccess());
    yield put(fetchMoviesRequest());
  } catch (e) {
    yield put(
      deleteMovieError({
        error: e.message,
      })
    );
  }
}

function* moviesSaga() {
  yield all([
    takeLatest(MoviesActionNames.FETCH_MOVIES_REQUEST, fetchMoviesSaga),
    takeLatest(
      MoviesActionNames.FILTER_MOVIES,
      fetchFilteredAndSortedMoviesSaga
    ),
    takeLatest(MoviesActionNames.SORT_MOVIES, sortMoviesSaga),
    takeLatest(MoviesActionNames.ADD_MOVIE, addMovieSaga),
    takeLatest(MoviesActionNames.EDIT_MOVIE, editMovieSaga),
    takeLatest(MoviesActionNames.DELETE_MOVIE, deleteMovieSaga),
  ]);
}

export function* rootSaga() {
  yield all([fork(moviesSaga)]);
}
