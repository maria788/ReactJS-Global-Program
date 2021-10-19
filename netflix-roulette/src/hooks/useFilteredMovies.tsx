import * as React from "react";
import { GenreType } from "@utils/constants";
import { useHomePageData } from "@data/HomePageDataProvider";

export const useFilteredMoviesList = () => {
  const { searchText, movies, selectedGenre } = useHomePageData();
  const shouldPerformSearch =
    searchText.trim().length !== 0 || selectedGenre !== GenreType.ALL;
  const searchMoviesByTextAndGenre = () => {
    return movies.filter(
      (movie) =>
        movie.title
          .toLowerCase()
          .includes(searchText.trimStart().toLowerCase()) &&
        (selectedGenre === GenreType.ALL ||
          movie.genres.includes(selectedGenre))
    );
  };

  return React.useMemo(
    () => (shouldPerformSearch ? searchMoviesByTextAndGenre() : movies),
    [selectedGenre, searchText, movies]
  );
};
