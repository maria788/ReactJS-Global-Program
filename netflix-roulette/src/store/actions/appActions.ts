import {
  SetIsAddMovieDialogVisible,
  SetIsAddMovieDialogVisiblePayload,
  SetMovieToEditOrViewPayload,
  SetMovieToEditOrView,
  DeleteMoviePayload,
  DeleteMovie,
} from "../interfaces";
import { AppActionNames } from "@store/data";

export const setIsAddMovieDialogVisible = (
  payload: SetIsAddMovieDialogVisiblePayload
): SetIsAddMovieDialogVisible => ({
  type: AppActionNames.SET_IS_ADD_MOVIE_DIALOG_VISIBLE,
  payload,
});

export const setMovieToEdit = (
  payload: SetMovieToEditOrViewPayload
): SetMovieToEditOrView => ({
  type: AppActionNames.SET_MOVIE_TO_EDIT,
  payload,
});

export const setMovieToView = (
  payload: SetMovieToEditOrViewPayload
): SetMovieToEditOrView => {
  return {
    type: AppActionNames.SET_MOVIE_TO_VIEW,
    payload,
  };
};

export const setMovieIdToDelete = (
  payload: DeleteMoviePayload
): DeleteMovie => {
  return {
    type: AppActionNames.SET_MOVIE_ID_TO_DELETE,
    payload,
  };
};
