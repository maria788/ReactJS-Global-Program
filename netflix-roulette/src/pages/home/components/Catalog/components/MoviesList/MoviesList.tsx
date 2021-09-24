import * as React from "react";
import { Movie } from "../../../../../../utils";
import { MovieCard } from "./MovieCard";
import { MoviesListContainer } from "./MoviesList.styles";

interface MoviesListProps {
  movies: Movie[];
}

export const MoviesList = ({ movies }: MoviesListProps) => {
  return (
    <MoviesListContainer>
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </MoviesListContainer>
  );
};
