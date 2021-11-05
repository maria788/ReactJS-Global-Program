import { Movie } from "@utils/interface";
import { GenreType } from "@utils/constants";

export interface ErrorPayload {
  error: string;
}

export interface Action {
  type: string;
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
}

export interface MoviesActions {
  type: string;
  payload: any;
}
