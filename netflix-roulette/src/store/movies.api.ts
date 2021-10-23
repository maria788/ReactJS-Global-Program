import axios from "axios";

const rootUrl = "http://localhost:4000/";

interface FilteredAndSortedMoviesParams {
  search: string;
  filter?: string;
}

interface SortedMoviesParams {
  sortBy: string;
}

export const getMovies = () => axios.get(rootUrl + "movies");

export const getFilteredAndSortedMovies = (
  paramsData: FilteredAndSortedMoviesParams
) =>
  axios.get(rootUrl + "movies", {
    params: { ...paramsData, searchBy: "title" },
  });

export const getSortedMovies = (paramsData: SortedMoviesParams) =>
  axios.get(rootUrl + "movies", {
    params: { sortOrder: "desk", ...paramsData },
  });
