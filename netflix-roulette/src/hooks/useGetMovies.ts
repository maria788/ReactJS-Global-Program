import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchMoviesRequest } from "@store/actions";
import { GenreType, MovieToFieldName } from "@utils/constants";

export const useGetMovies = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const searchQuery = searchParams.get("searchQuery");
  const genre = searchParams.get("genre");
  const sortBy = searchParams.get("sortBy");

  return () =>
    dispatch(
      fetchMoviesRequest({
        selectedGenre: (genre as GenreType) || GenreType.ALL,
        searchText: searchQuery,
        sortBy: sortBy || MovieToFieldName.RELEASE_DATE,
      })
    );
};
