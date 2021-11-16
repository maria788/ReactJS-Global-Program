import { appReducer } from "./appReducer";
import { AppActionNames, appInitialState, MoviesActionNames } from "../data";

describe("reducer tests", () => {
  const movieMock = {
    id: 101,
    title: "Star Wars: The Last Jedi",
    tagline: "The Saga Continues",
    vote_average: 7.1,
    vote_count: 4732,
    release_date: "2017-12-13",
    poster_path: "https://image.jpg",
    overview: "overview",
    budget: 200000000,
    revenue: 1325937250,
    genres: ["Fantasy", "Adventure", "Science Fiction"],
    runtime: 152,
  };

  test("should return the initial state", () => {
    const action = {
      type: "unknown",
    };
    expect(appReducer(undefined, action)).toEqual(appInitialState);
  });

  test("should set isAddMovieDialogVisible to true", () => {
    const action = {
      type: AppActionNames.SET_IS_ADD_MOVIE_DIALOG_VISIBLE,
      payload: true,
    };

    expect(appReducer(appInitialState, action)).toEqual({
      ...appInitialState,
      isAddMovieDialogVisible: true,
    });
  });

  test("should set isAddMovieDialogVisible to true", () => {
    const action = {
      type: AppActionNames.SET_IS_ADD_MOVIE_DIALOG_VISIBLE,
      payload: true,
    };

    expect(appReducer(appInitialState, action)).toEqual({
      ...appInitialState,
      isAddMovieDialogVisible: true,
    });
  });

  test("should save movie for editing", () => {
    const action = {
      type: AppActionNames.SET_MOVIE_TO_EDIT,
      payload: movieMock,
    };

    expect(appReducer(appInitialState, action)).toEqual({
      ...appInitialState,
      movieToEdit: movieMock,
    });
  });

  test("should save movie for deletion", () => {
    const id = 33;
    const action = {
      type: AppActionNames.SET_MOVIE_ID_TO_DELETE,
      payload: id,
    };

    expect(appReducer(appInitialState, action)).toEqual({
      ...appInitialState,
      movieIdToDelete: id,
    });
  });
  test("should delete save movie for deletion", () => {
    let action = {
      type: MoviesActionNames.DELETE_MOVIE_SUCCESS,
    };

    expect(appReducer(appInitialState, action)).toEqual({
      ...appInitialState,
      movieIdToDelete: null,
    });

    action = {
      type: MoviesActionNames.DELETE_MOVIE_ERROR,
    };

    expect(appReducer(appInitialState, action)).toEqual({
      ...appInitialState,
      movieIdToDelete: null,
    });
  });

  test("should delete movie for editing", () => {
    let action = {
      type: MoviesActionNames.ADD_EDIT_MOVIE_SUCCESS,
    };

    expect(appReducer(appInitialState, action)).toEqual({
      ...appInitialState,
      movieToEdit: null,
    });

    action = {
      type: MoviesActionNames.ADD_EDIT_MOVIE_ERROR,
    };

    expect(appReducer(appInitialState, action)).toEqual({
      ...appInitialState,
      movieToEdit: null,
    });
  });
});
