import { MoviesActions } from "../interfaces";
import { appInitialState, AppActionNames, MoviesActionNames } from "../data";

export const appReducer = (state = appInitialState, action: MoviesActions) => {
  switch (action.type) {
    case AppActionNames.SET_IS_ADD_MOVIE_DIALOG_VISIBLE:
      return {
        ...state,
        isAddMovieDialogVisible: action.payload,
      };
    case AppActionNames.SET_MOVIE_TO_EDIT:
      return {
        ...state,
        movieToEdit: action.payload,
      };
    case AppActionNames.SET_MOVIE_ID_TO_DELETE:
      return {
        ...state,
        movieIdToDelete: action.payload,
      };
    case MoviesActionNames.DELETE_MOVIE_SUCCESS:
    case MoviesActionNames.DELETE_MOVIE_ERROR:
      return {
        ...state,
        movieIdToDelete: null,
      };
    case MoviesActionNames.ADD_EDIT_MOVIE_SUCCESS:
    case MoviesActionNames.ADD_EDIT_MOVIE_ERROR:
      return {
        ...state,
        isAddMovieDialogVisible: false,
        movieToEdit: null,
      };
    default:
      return state;
  }
};
