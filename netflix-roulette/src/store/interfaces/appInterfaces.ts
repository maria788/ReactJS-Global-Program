import { Movie } from "@utils/interface";
import { Action } from "@store/interfaces/commonInteraces";

export interface SetIsAddMovieDialogVisiblePayload {
  isAddMovieDialogVisible: boolean;
}

export interface SetIsAddMovieDialogVisible extends Action {
  payload: SetIsAddMovieDialogVisiblePayload;
}

export interface SetMovieToEditOrViewPayload {
  movie: Movie | null;
}

export interface AddOrEditMoviePayload {
  movie: Partial<Movie>;
}

export interface SetMovieToEditOrView extends Action {
  payload: SetMovieToEditOrViewPayload;
}

export interface AddOrEditMovie extends Action {
  payload: AddOrEditMoviePayload;
}

export interface AppInterface {
  isAddMovieDialogVisible: boolean;
  movieIdToDelete: number | null;
  movieToEdit: Movie | null;
  movieToView: Movie | null;
}
