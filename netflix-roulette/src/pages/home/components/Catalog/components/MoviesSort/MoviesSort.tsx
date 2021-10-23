import * as React from "react";
import { connect } from "react-redux";
import { Select, Option } from "./MoviesSort.styles";
import { MoviesState, SortMovies, SortMoviesPayload } from "@store/interfaces";
import { sortMovies } from "@store/actions";

interface MoviesSortProps extends Partial<MoviesState> {
  sortMovies: (payload: SortMoviesPayload) => SortMovies;
}

const MoviesSortComponent = ({ sortBy, sortMovies }: MoviesSortProps) => (
  <div>
    sort by
    <Select
      value={sortBy}
      onChange={(e) => sortMovies({ sortBy: e.target.value })}
    >
      <Option value="release_date">Release Date</Option>
      <Option value="vote_average">Rating</Option>
    </Select>
  </div>
);

const mapStateToProps = ({ moviesState }: { moviesState: MoviesState }) => ({
  sortBy: moviesState.sortBy,
});

const mapDispatchToProps = {
  sortMovies,
};

export const MoviesSort = connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesSortComponent);
