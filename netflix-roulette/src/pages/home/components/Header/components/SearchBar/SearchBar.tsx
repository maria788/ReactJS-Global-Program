import * as React from "react";
import { useSearchParams } from "react-router-dom";
import {
  Button,
  SearchBarContainer,
  SearchBarText,
  Input,
} from "./SearchBar.styles";
import { useMoviesSearchParams } from "@hooks";

export const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = React.useState<string>("");
  const moviesSearchParams = useMoviesSearchParams(searchParams);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value.trim());
  };

  const handleSearch = () => {
    if (inputValue) {
      setSearchParams({ ...moviesSearchParams, searchQuery: inputValue });
    } else {
      const { searchQuery, ...data } = moviesSearchParams;
      setSearchParams(data);
    }
  };

  return (
    <SearchBarContainer>
      <SearchBarText>Find your movie</SearchBarText>
      <div>
        <Input
          type="search"
          placeholder="What do you want to watch?"
          onChange={handleInputChange}
          value={inputValue}
          aria-label="searchInput"
        />
        <Button onClick={handleSearch}>Search</Button>
      </div>
    </SearchBarContainer>
  );
};
