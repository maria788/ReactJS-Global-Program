import React from "react";
import {
  GenresTabs,
  MoviesList,
  ResultCount,
  MoviesSort,
  DeleteMovieDialog,
} from "./components";
import { CatalogContainer, FiltersContainer } from "./Catalog.styles";

export const Catalog = () => (
  <CatalogContainer>
    <FiltersContainer>
      <GenresTabs />
      <MoviesSort />
    </FiltersContainer>
    <ResultCount />
    <MoviesList />
    <DeleteMovieDialog />
  </CatalogContainer>
);
