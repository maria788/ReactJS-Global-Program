import * as React from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { HeaderContainer, TopPanel } from "./Header.styles";
import { AddMovieButton, MoviePanel, SearchBar } from "./components";
import { AppLogo } from "@ui/AppLogo";
import { RootState } from "@store/reducers";
import { useMoviesSearchParams } from "@hooks";
import { Movie } from "@utils/interface";

export const Header = () => {
  const [searchParams] = useSearchParams();
  const { movieId } = useMoviesSearchParams(searchParams);

  const movieToView = useSelector(
    ({ moviesState }: RootState) =>
      movieId &&
      moviesState.movies.find((movie: Movie) => movie.id.toString() === movieId)
  );

  return (
    <HeaderContainer isImgBackground={!movieId}>
      {movieId ? (
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
