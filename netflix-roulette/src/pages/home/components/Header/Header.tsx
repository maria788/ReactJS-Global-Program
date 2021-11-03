import * as React from "react";
import { useSelector } from "react-redux";
import { HeaderContainer, TopPanel } from "./Header.styles";
import { AddMovieButton, MoviePanel, SearchBar } from "./components";
import { AppLogo } from "@ui/AppLogo";
import { RootState } from "@store/reducers";

export const Header = () => {
  const movieToView = useSelector(
    ({ moviesState }: RootState) => moviesState.movieToView
  );

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
