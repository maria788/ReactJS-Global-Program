import axios from "axios";
import { Movie } from "@utils/interface";

const rootUrl = "http://localhost:4000/";

interface FilteredAndSortedMoviesParams {
  search: string;
  filter?: string;
}

interface SortedMoviesParams {
  sortBy: string;
}

const instance = axios.create({
  baseURL: rootUrl,
});

const { get: getMovieData, post: postMovieData, put: putMovieData, delete: deleteMovieData } = instance;

export const getMovies = () => getMovieData("movies");

export const getFilteredAndSortedMovies = (
  paramsData: FilteredAndSortedMoviesParams
) =>
  getMovieData("movies", {
    params: { ...paramsData, searchBy: "title" },
  });

export const getSortedMovies = (paramsData: SortedMoviesParams) =>
  getMovieData("movies", {
    params: { sortOrder: "desk", ...paramsData },
  });

export const addMovie = (movie: Movie) => postMovieData("movies", movie);

export const editMovie = (movie: Movie) => putMovieData("movies", movie);

export const deleteMovie = (movieId: number) =>
    deleteMovieData("movies/" + movieId);
