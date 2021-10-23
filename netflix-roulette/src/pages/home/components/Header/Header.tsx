import * as React from "react";
import { connect } from "react-redux";
import { HeaderContainer, TopPanel } from "./Header.styles";
import { AddMovieButton, MoviePanel, SearchBar } from "./components";
import { AppLogo } from "@ui/AppLogo";
import { MoviesState } from "@store/interfaces";

interface HeaderProps extends Partial<MoviesState> {}

const HeaderComponent = ({ movieToView }: HeaderProps) => (
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

const mapStateToProps = ({ moviesState }: { moviesState: MoviesState }) => ({
  movieToView: moviesState.movieToView,
});

export const Header = connect(mapStateToProps, null)(HeaderComponent);
