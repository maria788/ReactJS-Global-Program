import {
  SetIsAddMovieDialogVisiblePayload,
  SetMovieToEditOrViewPayload,
  DeleteMoviePayload,
} from "../interfaces";
import { AppActionNames } from "@store/data";

export const setIsAddMovieDialogVisible = ({
  isAddMovieDialogVisible,
}: SetIsAddMovieDialogVisiblePayload) => ({
  type: AppActionNames.SET_IS_ADD_MOVIE_DIALOG_VISIBLE,
  payload: isAddMovieDialogVisible,
});

export const setMovieToEdit = ({ movie }: SetMovieToEditOrViewPayload) => ({
  type: AppActionNames.SET_MOVIE_TO_EDIT,
  payload: movie,
});

export const setMovieIdToDelete = ({ movieId }: DeleteMoviePayload) => {
  return {
    type: AppActionNames.SET_MOVIE_ID_TO_DELETE,
    payload: movieId,
  };
};
