import axios from "axios";
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

const { get: getMovieData } = instance;

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
