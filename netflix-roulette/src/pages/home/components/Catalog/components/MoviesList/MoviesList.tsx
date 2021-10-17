import * as React from "react";
import { Movie } from "@utils";
import { MovieCard } from "./MovieCard";
import { MoviesListContainer } from "./MoviesList.styles";

interface MoviesListProps {
  movies: Movie[];
  handleMovieEdit: (movie: Movie) => void;
  handleMovieDelete: (movie: Movie) => void;
}

export const MoviesList = ({
  movies,
  handleMovieEdit,
  handleMovieDelete,
}: MoviesListProps) => {
  return (
    <MoviesListContainer>
      {movies.map((movie) => (
        <MovieCard
          movie={movie}
          key={movie.id}
          handleMovieEdit={handleMovieEdit}
          handleMovieDelete={handleMovieDelete}
        />
      ))}
    </MoviesListContainer>
  );
};
