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

interface AppState {
  loading: boolean;
  movies: Movie[] | [];
  error: string | null;
  selectedGenre: GenreType;
  searchText: string;
  isAddMovieDialogVisible: boolean;
  sortBy: string;
}

export interface MoviesState extends AppState {
  movieToEdit: Movie | null;
  movieToView: Movie | null;
  movieToDelete: Movie | null;
}

export interface MoviesActions {
  type: string;
  payload: any;
}
