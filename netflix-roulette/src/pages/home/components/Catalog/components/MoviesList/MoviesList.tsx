import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MovieCard } from "./MovieCard";
import { MoviesListContainer } from "./MoviesList.styles";
import { fetchMoviesRequest } from "@store/actions";
import { RootState } from "@store/reducers";

export const MoviesList = () => {
  const { loading, movies, error } = useSelector(
    ({ moviesState }: RootState) => moviesState
  );
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchMoviesRequest());
  }, []);

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
