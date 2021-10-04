import * as React from "react";
import { Catalog, Header } from "./components";
import { GenreType, Movie, MOVIES } from "@utils";
import { MovieDetails } from "..";
import { DeleteMovieDialog } from "../deleteMovieDIalog";

export const HomePage = () => {
  const [filteredMovies, setFilteredMovies] = React.useState<Movie[]>([]);
  const [selectedGenre, setSelectedGenre] = React.useState<GenreType>(
    GenreType.ALL
  );
  const [isMovieDetailsDialogVisible, setIsMovieDetailsDialogVisible] =
    React.useState<boolean>(false);
  const [isMovieDeleteDialogVisible, setIsMovieDeleteDialogVisible] =
    React.useState<boolean>(false);
  const [movieToEdit, setMovieToEdit] = React.useState<Movie>(null);

  const handleSearch = (searchText: string) => {
    const filteredMovies = MOVIES.filter((movie: Movie) =>
      movie.title?.toLowerCase().includes(searchText.trimStart().toLowerCase())
    );
    setFilteredMovies(filteredMovies);
  };

  React.useEffect(() => setFilteredMovies(MOVIES), []);

  const handleGenreChange = (
    event: React.ChangeEvent<{}>,
    genre: GenreType
  ) => {
    const filteredMovies =
      genre === GenreType.ALL
        ? MOVIES
        : MOVIES.filter((movie: Movie) => movie.genres.includes(genre));
    setSelectedGenre(genre);
    setFilteredMovies(filteredMovies);
  };

  const handleAddMovieDialogOpen = () => {
    setIsMovieDetailsDialogVisible(true);
  };

  const handleAddMovieDialogClose = () => {
    setIsMovieDetailsDialogVisible(false);
    setMovieToEdit(null);
  };

  const handleMovieEdit = (movie: Movie) => {
    setMovieToEdit(movie);
    handleAddMovieDialogOpen();
  };

  const handleMovieDelete = (movie: Movie) => {
    setMovieToEdit(movie);
    setIsMovieDeleteDialogVisible(true);
  };

  return (
    <>
      <Header
        handleSearch={handleSearch}
        handleAddMovieDialogOpen={handleAddMovieDialogOpen}
      />
      <Catalog
        handleGenreChange={handleGenreChange}
        selectedGenre={selectedGenre}
        movies={filteredMovies}
        handleMovieEdit={handleMovieEdit}
        handleMovieDelete={handleMovieDelete}
      />
      <MovieDetails
        isDialogVisible={isMovieDetailsDialogVisible}
        handleDialogClose={handleAddMovieDialogClose}
        movie={movieToEdit}
      />
      <DeleteMovieDialog
        isDialogVisible={isMovieDeleteDialogVisible}
        handleDialogClose={() => setIsMovieDeleteDialogVisible(false)}
      />
    </>
  );
};
