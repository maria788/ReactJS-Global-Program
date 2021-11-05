import * as React from "react";
import { useDispatch } from "react-redux";
import { getYearFromDateString, Movie } from "@utils";
import {
  MovieCardContainer,
  MovieDescription,
  TitleRow,
  MovieGenres,
  MovieYear,
} from "./MovieCard.styles";
import { DropdownMenu } from "../DropdownMenu";
import { FALLBACK_IMG_SRC } from "@utils/constants";
import { setMovieIdToDelete, setMovieToEdit } from "@store/actions";
import { useSearchParams } from "react-router-dom";
import { useMoviesSearchParams } from "@hooks";

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard = ({ movie }: MovieCardProps) => {
  const dispatch = useDispatch();
  const { title, genres, release_date, poster_path } = movie;
  const year = getYearFromDateString(release_date);
  const [imageSrc, setImageSrc] = React.useState(poster_path);
  const [searchParams, setSearchParams] = useSearchParams();
  const moviesSearchParams = useMoviesSearchParams(searchParams);

  const handleEdit = () => dispatch(setMovieToEdit({ movie }));
  const handleDelete = () =>
    dispatch(setMovieIdToDelete({ movieId: movie.id }));
  const handleView = () =>
    setSearchParams({ ...moviesSearchParams, movieId: movie.id });
  const handleImageError = () => setImageSrc(FALLBACK_IMG_SRC);

  return (
    <MovieCardContainer>
      <img
        src={imageSrc}
        alt={title}
        width={323}
        height={486}
        onError={handleImageError}
        onClick={handleView}
      />
      <DropdownMenu handleEdit={handleEdit} handleDelete={handleDelete} />
      <MovieDescription>
        <TitleRow>
          <h3>{title}</h3>
          <MovieYear>{year}</MovieYear>
        </TitleRow>
        <MovieGenres>{genres.join(", ")}</MovieGenres>
      </MovieDescription>
    </MovieCardContainer>
  );
};
