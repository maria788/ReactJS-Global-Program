import * as React from "react";
import { useSelector } from "react-redux";
import { MovieCard } from "./MovieCard";
import { MoviesListContainer } from "./MoviesList.styles";
import { RootState } from "@store/reducers";
import { useGetMovies, useMoviesSearchParams } from "@hooks";
import { useSearchParams } from "react-router-dom";

export const MoviesList = () => {
  const [searchParams] = useSearchParams();
  const { loading, movies, error } = useSelector(
    ({ moviesState }: RootState) => moviesState
  );
  const { searchQuery, genre, sortBy } = useMoviesSearchParams(searchParams);
  const getMovies = useGetMovies();

  React.useEffect(() => {
    getMovies();
  }, [searchQuery, genre, sortBy]);

  if (loading) {
    return <>Loading....</>;
  }

  if (error) {
    return <>No results</>;
  }

  return (
    <MoviesListContainer>
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </MoviesListContainer>
  );
};
