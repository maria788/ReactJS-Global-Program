import "@babel/polyfill";
import { all, call, put, takeLatest, fork } from "redux-saga/effects";
import { fetchMoviesFailure, fetchMoviesSuccess } from "./actions";
import {
  getMovies,
  getFilteredAndSortedMovies,
  getSortedMovies,
} from "./movies.api";
import { ActionNames } from "./data";
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
      fetchMoviesFailure({
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
      fetchMoviesFailure({
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
      fetchMoviesFailure({
        error: e.message,
      })
    );
  }
}

function* moviesSaga() {
  yield all([
    takeLatest(ActionNames.FETCH_MOVIES_REQUEST, fetchMoviesSaga),
    takeLatest(ActionNames.FILTER_MOVIES, fetchFilteredAndSortedMoviesSaga),
    takeLatest(ActionNames.SORT_MOVIES, sortMoviesSaga),
  ]);
}

export function* rootSaga() {
  yield all([fork(moviesSaga)]);
}
