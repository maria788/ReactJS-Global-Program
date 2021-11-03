import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  SearchBarContainer,
  SearchBarText,
  Input,
} from "./SearchBar.styles";
import { filterMovies } from "@store/actions";
import { RootState } from "@store/reducers";

export const SearchBar = () => {
  const selectedGenre = useSelector(
    ({ moviesState }: RootState) => moviesState.selectedGenre
  );
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = React.useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSearch = () =>
    dispatch(filterMovies({ searchText: inputValue, selectedGenre }));

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
