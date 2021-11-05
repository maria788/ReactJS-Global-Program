import axios from "axios";
import { Movie } from "@utils/interface";
import { FetchMoviesPayload } from "@store/interfaces";
import { GenreType, MovieToFieldName } from "@utils/constants";

const rootUrl = "http://localhost:4000/";

const instance = axios.create({
  baseURL: rootUrl,
});

const {
  get: getMovieData,
  post: postMovieData,
  put: putMovieData,
  delete: deleteMovieData,
} = instance;

export const getMoviesWithParams = (paramsData: FetchMoviesPayload) => {
  const {
    sortBy = MovieToFieldName.RELEASE_DATE,
    selectedGenre = GenreType.ALL,
    searchText = "",
  } = paramsData || {};

  const params = {
    sortBy,
    sortOrder: "desk",
    ...(selectedGenre !== GenreType.ALL && { filter: selectedGenre }),
    ...(searchText && { search: searchText, searchBy: "title" }),
  };

  return getMovieData("movies", {
    params,
  });
};

export const addMovie = (movie: Movie) => postMovieData("movies", movie);

export const editMovie = (movie: Movie) => putMovieData("movies", movie);

export const deleteMovie = (movieId: number) =>
  deleteMovieData("movies/" + movieId);
