import { Movie } from "@utils/interface";
import { GenreType } from "@utils/constants";
import { Action } from "@store/interfaces/commonInteraces";

export interface FetchMoviesPayload {
  searchText: string;
  selectedGenre: GenreType;
  sortBy: string;
}

export interface FetchMoviesSuccessPayload {
  movies: Movie[];
}

export interface DeleteMoviePayload {
  movieId: number;
}

export interface FetchMoviesSuccess extends Action {
  payload: FetchMoviesSuccessPayload;
}

export interface MoviesInterface {
  loading: boolean;
  movies: Movie[];
  error: string | null;
}
