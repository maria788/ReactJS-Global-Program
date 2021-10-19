import * as React from "react";
import { HeaderContainer, TopPanel } from "./Header.styles";
import { AddMovieButton, SearchBar } from "./components";
import { AppLogo } from "@ui/AppLogo";
import { MoviePanel } from "./components/MoviePanel";
import { useHomePageData } from "@data/HomePageDataProvider";

export const Header = () => {
  const { movieToView } = useHomePageData();

  return (
    <HeaderContainer isImgBackground={movieToView === null}>
      {movieToView ? (
        <MoviePanel movie={movieToView} />
      ) : (
        <>
          <TopPanel>
            <AppLogo />
            <AddMovieButton />
          </TopPanel>
          <SearchBar />
        </>
      )}
    </HeaderContainer>
  );
};
