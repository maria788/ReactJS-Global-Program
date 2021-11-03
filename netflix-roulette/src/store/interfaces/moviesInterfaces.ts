import { Movie } from "@utils/interface";
import { GenreType } from "@utils/constants";
import { Action } from "@store/interfaces/commonInteraces";

export interface FilterMoviesPayload {
  searchText: string;
  selectedGenre: GenreType;
}

export interface FetchMoviesSuccessPayload {
  movies: Movie[];
}

export interface SortMoviesPayload {
  sortBy: string;
}

export interface DeleteMoviePayload {
  movieId: number;
}

export interface FetchMoviesRequest extends Action {}

export interface FetchMoviesSuccess extends Action {
  payload: FetchMoviesSuccessPayload;
}

export interface FilterMovies extends Action {
  payload: FilterMoviesPayload;
}

export interface SortMovies extends Action {
  payload: SortMoviesPayload;
}

export interface DeleteMovie extends Action {
  payload: DeleteMoviePayload;
}

export interface MoviesInterface {
  loading: boolean;
  movies: Movie[];
  error: string | null;
  selectedGenre: GenreType;
  searchText: string;
  sortBy: string;
}
