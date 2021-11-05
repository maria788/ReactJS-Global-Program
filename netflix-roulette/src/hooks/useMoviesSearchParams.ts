import { SearchParams } from "@utils/constants";

export const useMoviesSearchParams = (searchParams: URLSearchParams) => {
  const searchQuery: string | null = searchParams.get(
    SearchParams.SEARCH_QUERY
  );
  const genre: string | null = searchParams.get(SearchParams.GENRE);
  const sortBy: string | null = searchParams.get(SearchParams.SORT_BY);
  const movieId: string | null = searchParams.get(SearchParams.MOVIE_ID);

  return {
    ...(searchQuery && { searchQuery }),
    ...(genre && { genre }),
    ...(sortBy && { sortBy }),
    ...(movieId && { movieId }),
  };
};
