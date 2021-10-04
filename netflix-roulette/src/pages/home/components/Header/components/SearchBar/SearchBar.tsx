import * as React from "react";
import {
  Button,
  SearchBarContainer,
  SearchBarText,
  Input,
} from "./SearchBar.styles";
import { useHomePageData } from "@data/HomePageDataProvider";

export const SearchBar = () => {
  const { setSearchText } = useHomePageData();
  const [inputValue, setInputValue] = React.useState<string>("");

  const handleInputChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
    },
    []
  );

  const handleSearch = React.useCallback(
    () => setSearchText(inputValue),
    [inputValue]
  );

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
