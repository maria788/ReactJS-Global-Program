import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Select, Option } from "./MoviesSort.styles";
import { sortMovies } from "@store/actions";
import { RootState } from "@store/reducers";

export const MoviesSort = () => {
  const dispatch = useDispatch();
  const sortBy = useSelector(
    ({ moviesState }: RootState) => moviesState.sortBy
  );

  return (
    <div>
      sort by
      <Select
        value={sortBy}
        onChange={(e) => dispatch(sortMovies({ sortBy: e.target.value }))}
      >
        <Option value="release_date">Release Date</Option>
        <Option value="vote_average">Rating</Option>
      </Select>
    </div>
  );
};
