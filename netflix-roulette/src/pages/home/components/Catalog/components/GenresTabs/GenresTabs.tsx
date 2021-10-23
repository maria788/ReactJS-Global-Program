import * as React from "react";
import { connect } from "react-redux";
import { GENRES } from "@utils";
import { Tabs, Tab } from "./GenresTabs.styles";
import { GenreType } from "@utils/constants";
import {
  MoviesState,
  FilterMovies,
  FilterMoviesPayload,
} from "@store/interfaces";
import { filterMovies } from "@store/actions";

interface GenresTabsProps extends Partial<MoviesState> {
  switchGenre: (payload: FilterMoviesPayload) => FilterMovies;
}

const GenresTabsComponent = ({
  selectedGenre,
  searchText,
  switchGenre,
}: GenresTabsProps) => (
  <Tabs>
    {GENRES.map((genre: GenreType) => (
      <Tab
        key={genre}
        isSelected={selectedGenre === genre}
        onClick={() => switchGenre({ selectedGenre: genre, searchText })}
      >
        {genre}
      </Tab>
    ))}
  </Tabs>
);

const mapStateToProps = ({ moviesState }: { moviesState: MoviesState }) => ({
  selectedGenre: moviesState.selectedGenre,
  searchText: moviesState.searchText,
});

const mapDispatchToProps = {
  switchGenre: filterMovies,
};

export const GenresTabs = connect(
  mapStateToProps,
  mapDispatchToProps
)(GenresTabsComponent);
