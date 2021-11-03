import { AppInterface } from "@store/interfaces";

export const appInitialState: AppInterface = {
  isAddMovieDialogVisible: false,
  movieToEdit: null,
  movieToView: null,
  movieIdToDelete: null,
};

export const AppActionNames = {
  SET_IS_ADD_MOVIE_DIALOG_VISIBLE: "SET_IS_ADD_MOVIE_DIALOG_VISIBLE",
  SET_MOVIE_TO_EDIT: "SET_MOVIE_TO_EDIT",
  SET_MOVIE_TO_VIEW: "SET_MOVIE_TO_VIEW",
  SET_MOVIE_ID_TO_DELETE: "SET_MOVIE_ID_TO_DELETE",
};
