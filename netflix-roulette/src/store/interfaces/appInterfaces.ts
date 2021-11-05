import { Movie } from "@utils/interface";

export interface SetIsAddMovieDialogVisiblePayload {
  isAddMovieDialogVisible: boolean;
}

export interface SetMovieToEditOrViewPayload {
  movie: Movie | null;
}

export interface AddOrEditMoviePayload {
  movie: Partial<Movie>;
}

export interface AppInterface {
  isAddMovieDialogVisible: boolean;
  movieIdToDelete: number | null;
  movieToEdit: Movie | null;
}
