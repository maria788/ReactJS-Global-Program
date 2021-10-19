import * as React from "react";
import { MovieCard } from "./MovieCard";
import { MoviesListContainer } from "./MoviesList.styles";
import { useFilteredMoviesList } from "../../../../../../hooks/useFilteredMovies";

export const MoviesList = () => {
  const filteredMovies = useFilteredMoviesList();

  return filteredMovies.length ? (
    <MoviesListContainer>
      {filteredMovies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </MoviesListContainer>
  ) : (
    <>No results</>
  );
};
