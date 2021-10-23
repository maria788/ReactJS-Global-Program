import * as React from "react";
import { connect } from "react-redux";
import {
  Button,
  SearchBarContainer,
  SearchBarText,
  Input,
} from "./SearchBar.styles";
import { filterMovies } from "@store/actions";
import {
  FilterMovies,
  FilterMoviesPayload,
  MoviesState,
} from "@store/interfaces";

interface SearchBarProps extends Partial<MoviesState> {
  searchMovie: (payload: FilterMoviesPayload) => FilterMovies;
}

const SearchBarComponent = ({ searchMovie, selectedGenre }: SearchBarProps) => {
  const [inputValue, setInputValue] = React.useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSearch = () =>
    searchMovie({ searchText: inputValue, selectedGenre });

  return (
    <SearchBarContainer>
      <SearchBarText>Find your movie</SearchBarText>
      <div>
        <Input
          type="search"
          placeholder="What do you want to watch?"
          onChange={handleInputChange}
          value={inputValue}
        />
        <Button onClick={handleSearch}>Search</Button>
      </div>
    </SearchBarContainer>
  );
};

const mapStateToProps = ({ moviesState }: { moviesState: MoviesState }) => ({
  selectedGenre: moviesState.selectedGenre,
});

const mapDispatchToProps = {
  searchMovie: filterMovies,
};

export const SearchBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBarComponent);
