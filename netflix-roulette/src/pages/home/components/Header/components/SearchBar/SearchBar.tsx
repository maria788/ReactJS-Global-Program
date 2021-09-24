import * as React from "react";
import {
  Button,
  SearchBarContainer,
  SearchBarText,
  Input,
} from "./SearchBar.styles";

interface CounterProps {
  handleSearch: (searchValue: string) => void;
}

export const SearchBar = ({ handleSearch }: CounterProps) => {
  const [searchValue, setSearchValue] = React.useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <SearchBarContainer>
      <SearchBarText>Find your movie</SearchBarText>
      <div>
        <Input
          type="search"
          placeholder="What do you want to watch?"
          onChange={handleInputChange}
        />
        <Button onClick={() => handleSearch(searchValue)}>Search</Button>
      </div>
    </SearchBarContainer>
  );
};
