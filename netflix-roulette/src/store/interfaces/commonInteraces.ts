import { Movie } from "@utils/interface";
import { GenreType } from "@utils/constants";

export interface ErrorPayload {
  error: string;
}

export interface Action {
  type: string;
}

export interface Error extends Action {
  payload: ErrorPayload;
}

interface AppState {
  loading: boolean;
  movies: Movie[];
  error: string | null;
  selectedGenre: GenreType;
  searchText: string;
  isAddMovieDialogVisible: boolean;
  sortBy: string;
  movieIdToDelete: number | null;
}

export interface MoviesState extends AppState {
  movieToEdit: Movie | null;
  movieToView: Movie | null;
}

interface MoviesActionsPayload extends AppState {
  movie: Movie | null;
  movieId: number;
}

export interface MoviesActions {
  type: string;
  payload: MoviesActionsPayload;
}
