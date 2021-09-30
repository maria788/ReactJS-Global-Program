import * as React from "react";
import { GenresTabs, MoviesList, ResultCount, MoviesSort } from "./components";
import { GenreType, Movie } from "@utils";
import { CatalogContainer, FiltersContainer } from "./Catalog.styles";

interface CatalogProps {
  movies: Movie[];
  selectedGenre: GenreType;
  handleGenreChange: (event: React.ChangeEvent<{}>, genre: GenreType) => void;
}

export const Catalog = ({
  movies,
  selectedGenre,
  handleGenreChange,
}: CatalogProps) => (
  <CatalogContainer>
    <FiltersContainer>
      <GenresTabs
        selectedGenre={selectedGenre}
        changeGenre={handleGenreChange}
      />
      <MoviesSort />
    </FiltersContainer>
    <ResultCount resultCount={movies.length} />
    <MoviesList movies={movies} />
  </CatalogContainer>
);
