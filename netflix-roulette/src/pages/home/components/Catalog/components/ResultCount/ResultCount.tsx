import * as React from "react";
import { useSelector } from "react-redux";
import { ResultCountCounter } from "./ResultCount.styles";
import { RootState } from "@store/reducers";

export const ResultCount = () => {
  const movies = useSelector(
    ({ moviesState }: RootState) => moviesState.movies
  );

  return (
    <ResultCountCounter>
      <b>{movies.length}</b> movies found
    </ResultCountCounter>
  );
};
