import * as React from "react";
import { HeaderContainer, TopPanel } from "./Header.styles";
import { AddMovieButton, SearchBar } from "./components";
import { AppLogo } from "@ui/AppLogo";

interface HeaderProps {
  handleSearch: (searchText: string) => void;
  handleAddMovieDialogOpen: () => void;
}

export const Header = ({
  handleSearch,
  handleAddMovieDialogOpen,
}: HeaderProps) => {
  return (
    <HeaderContainer>
      <TopPanel>
        <AppLogo />
        <AddMovieButton handleAddMovieDialogOpen={handleAddMovieDialogOpen} />
      </TopPanel>
      <SearchBar handleSearch={handleSearch} />
    </HeaderContainer>
  );
};
