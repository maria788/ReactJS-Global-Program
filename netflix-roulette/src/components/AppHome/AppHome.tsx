import * as React from "react";
import { GenresTabs, MoviesList, SearchBar } from "./components";
import { Box } from "@material-ui/core";
import { GenreType, MOVIES } from "../../utils";

export interface Movie {
  id: number;
  title: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
  poster_path: string;
  overview: string;
  budget: number;
  revenue: number;
  genres: string[];
  runtime: number;
}

interface AppHomeState {
  filteredMovies: Movie[];
  selectedGenre: string;
}

export class AppHome extends React.Component<{}, AppHomeState> {
  state = { filteredMovies: MOVIES, selectedGenre: GenreType.ALL };

  handleSearch(searchText: string) {
    const filteredMovies = MOVIES.filter((movie) =>
      movie.title.includes(searchText)
    );
    this.setState({ filteredMovies });
  }

  handleGenreChange(event: React.ChangeEvent<{}>, genre: string) {
    const filteredMovies =
      genre === GenreType.ALL
        ? MOVIES
        : MOVIES.filter((movie) => movie.genres.includes(genre));
    this.setState({ selectedGenre: genre, filteredMovies });
  }

  render() {
    return (
      <Box my={3}>
        <SearchBar handleSearch={this.handleSearch.bind(this)} />
        <GenresTabs
          selectedGenre={this.state.selectedGenre}
          changeGenre={this.handleGenreChange.bind(this)}
        />
        <MoviesList movies={this.state.filteredMovies} />
      </Box>
    );
  }
}
