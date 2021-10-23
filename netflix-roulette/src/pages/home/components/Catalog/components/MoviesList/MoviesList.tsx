import * as React from "react";
import { connect } from "react-redux";
import { MovieCard } from "./MovieCard";
import { MoviesListContainer } from "./MoviesList.styles";
import { fetchMoviesRequest } from "@store/actions";
import { FetchMoviesRequest, MoviesState } from "@store/interfaces";
import { Movie } from "@utils/interface";

interface MoviesListProps extends Partial<MoviesState> {
  fetchMovies: () => FetchMoviesRequest;
  setMovieToDelete: (movieToEdit: Movie) => void;
}

const MoviesListComponent = ({
  loading,
  movies,
  error,
  fetchMovies,
  setMovieToDelete,
}: MoviesListProps) => {
  React.useEffect(() => {
    fetchMovies();
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
        <MovieCard
          movie={movie}
          key={movie.id}
          setMovieToDelete={setMovieToDelete}
        />
      ))}
    </MoviesListContainer>
  );
};

const mapStateToProps = ({ moviesState }: { moviesState: MoviesState }) => ({
  movies: moviesState.movies,
  loading: moviesState.loading,
  error: moviesState.error,
});

const mapDispatchToProps = {
  fetchMovies: fetchMoviesRequest,
};

export const MoviesList = connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesListComponent);
