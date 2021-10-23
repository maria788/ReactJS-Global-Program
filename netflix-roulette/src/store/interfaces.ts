import { Movie } from "@utils/interface";
import { GenreType } from "@utils/constants";

export interface FetchMoviesSuccessPayload {
  movies: Movie[];
}

export interface FetchMoviesErrorPayload {
  error: string;
}

export interface FilterMoviesPayload {
  searchText: string;
  selectedGenre: GenreType;
}

export interface SortMoviesPayload {
  sortBy: string;
}

export interface SetIsAddMovieDialogVisiblePayload {
  isAddMovieDialogVisible: boolean;
}

export interface SetMovieToEditOrViewPayload {
  movie: Movie | null;
}

interface Action {
  type: string;
}

export interface FetchMoviesRequest extends Action {}

export interface FetchMoviesSuccess extends Action {
  payload: FetchMoviesSuccessPayload;
}

export interface FetchMoviesError extends Action {
  payload: FetchMoviesErrorPayload;
}

export interface FilterMovies extends Action {
  payload: FilterMoviesPayload;
}

export interface SortMovies extends Action {
  payload: SortMoviesPayload;
}

export interface SetIsAddMovieDialogVisible extends Action {
  payload: SetIsAddMovieDialogVisiblePayload;
}

export interface SetMovieToEditOrView extends Action {
  payload: SetMovieToEditOrViewPayload;
}
interface AppState {
  loading: boolean;
  movies: Movie[];
  error: string | null;
  selectedGenre: GenreType;
  searchText: string;
  isAddMovieDialogVisible: boolean;
  sortBy: string;
}

export interface MoviesState extends AppState {
  movieToEdit: Movie | null;
  movieToView: Movie | null;
}

interface MoviesActionsPayload extends AppState {
  movie: Movie | null;
}

export interface MoviesActions {
  type: string;
  payload: MoviesActionsPayload;
}
