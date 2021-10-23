import * as React from "react";
import { connect } from "react-redux";
import { ResultCountCounter } from "./ResultCount.styles";
import { MoviesState } from "@store/interfaces";
import { Movie } from "@utils/interface";

interface ResultCountProps {
  movies: Movie[];
}

const ResultCountComponent = ({ movies }: ResultCountProps) => {
  return (
    <ResultCountCounter>
      <b>{movies.length}</b> movies found
    </ResultCountCounter>
  );
};

const mapStateToProps = ({ moviesState }: { moviesState: MoviesState }) => ({
  movies: moviesState.movies,
});

export const ResultCount = connect(mapStateToProps)(ResultCountComponent);
