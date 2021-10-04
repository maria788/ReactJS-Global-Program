import * as React from "react";
import { Catalog, Header } from "./components";
import { GenreType, Movie, MOVIES } from "@utils";

export const HomePage = () => {
  const [filteredMovies, setFilteredMovies] = React.useState<Movie[]>(MOVIES);
  const [selectedGenre, setSelectedGenre] = React.useState<GenreType>(
    GenreType.ALL
  );

  const handleSearch = (searchText: string) => {
    const filteredMovies = MOVIES.filter((movie) =>
      movie.title?.toLowerCase().includes(searchText.trimStart().toLowerCase())
    );
    setFilteredMovies(filteredMovies);
  };

  const handleGenreChange = (
    event: React.ChangeEvent<{}>,
    genre: GenreType
  ) => {
    const filteredMovies =
      genre === GenreType.ALL
        ? MOVIES
        : MOVIES.filter((movie) => movie.genres.includes(genre));
    setSelectedGenre(genre);
    setFilteredMovies(filteredMovies);
  };

  return (
    <>
      <Header handleSearch={handleSearch} />
      <Catalog
        handleGenreChange={handleGenreChange}
        selectedGenre={selectedGenre}
        movies={filteredMovies}
      />
    </>
  );
};
