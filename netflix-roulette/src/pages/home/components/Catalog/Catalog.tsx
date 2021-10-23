import React, { useState } from "react";
import {
  GenresTabs,
  MoviesList,
  ResultCount,
  MoviesSort,
  DeleteMovieDialog,
} from "./components";
import { CatalogContainer, FiltersContainer } from "./Catalog.styles";
import { Movie } from "@utils/interface";

export const Catalog = () => {
  const [movieToDelete, setMovieToDelete] = useState<Movie>(null);

  return (
    <CatalogContainer>
      <FiltersContainer>
        <GenresTabs />
        <MoviesSort />
      </FiltersContainer>
      <ResultCount />
      <MoviesList setMovieToDelete={setMovieToDelete} />
      <DeleteMovieDialog
        movieToDelete={movieToDelete}
        setMovieToDelete={setMovieToDelete}
      />
    </CatalogContainer>
  );
};
