import "@babel/polyfill";
import { all, call, put, takeLatest, fork } from "redux-saga/effects";
import {
  addEditMovieSuccess,
  deleteMovieSuccess,
  requestError,
  fetchMoviesRequest,
  fetchMoviesSuccess,
} from "./actions";
import {
  addMovie,
  editMovie,
  deleteMovie,
  getMoviesWithParams,
} from "./movies.api";
import { MoviesActionNames } from "./data";
import { Movie } from "@utils/interface";
import { AxiosResponse } from "axios";
import { MoviesActions } from "./interfaces";

function* fetchMoviesSaga(action: MoviesActions) {
  try {
    const response: AxiosResponse<{ data: Movie[] }> = yield call(
      getMoviesWithParams,
      action.payload
    );

    yield put(
      fetchMoviesSuccess({
        movies: response.data.data,
      })
    );
  } catch (e) {
    yield put(
      requestError({
        error: e.message,
      })
    );
  }
}

function* addMovieSaga(action: MoviesActions) {
  try {
    yield call(addMovie, action.payload);

    yield put(addEditMovieSuccess());
    yield put(fetchMoviesRequest());
  } catch (e) {
    yield put(
      requestError({
        error: e.message,
      })
    );
  }
}

function* editMovieSaga(action: MoviesActions) {
  try {
    yield call(editMovie, action.payload);

    yield put(addEditMovieSuccess());
    yield put(fetchMoviesRequest());
  } catch (e) {
    yield put(
      requestError({
        error: e.message,
      })
    );
  }
}

function* deleteMovieSaga(action: MoviesActions) {
  try {
    yield call(deleteMovie, action.payload);

    yield put(deleteMovieSuccess());
    yield put(fetchMoviesRequest());
  } catch (e) {
    yield put(
      requestError({
        error: e.message,
      })
    );
  }
}

function* moviesSaga() {
  yield all([
    takeLatest(MoviesActionNames.FETCH_MOVIES_REQUEST, fetchMoviesSaga),
    takeLatest(MoviesActionNames.ADD_MOVIE, addMovieSaga),
    takeLatest(MoviesActionNames.EDIT_MOVIE, editMovieSaga),
    takeLatest(MoviesActionNames.DELETE_MOVIE, deleteMovieSaga),
  ]);
}

export function* rootSaga() {
  yield all([fork(moviesSaga)]);
}
