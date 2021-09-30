import * as React from "react";
import { HeaderContainer, TopPanel } from "./Header.styles";
import { AddMovieButton, SearchBar } from "./components";
import { AppLogo } from "@ui/AppLogo";

interface HeaderProps {
  handleSearch: (searchText: string) => void;
}

export const Header = ({ handleSearch }: HeaderProps) => {
  return (
    <HeaderContainer>
      <TopPanel>
        <AppLogo />
        <AddMovieButton />
      </TopPanel>
      <SearchBar handleSearch={handleSearch} />
    </HeaderContainer>
  );
};
