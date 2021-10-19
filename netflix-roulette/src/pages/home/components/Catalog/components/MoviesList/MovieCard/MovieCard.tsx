import * as React from "react";
import { getYearFromDateString, Movie } from "@utils";
import {
  MovieCardContainer,
  MovieDescription,
  TitleRow,
  MovieGenres,
  MovieYear,
} from "./MovieCard.styles";
import { DropdownMenu } from "../DropdownMenu";
import { useHomePageData } from "@data/HomePageDataProvider";
import { FALLBACK_IMG_SRC } from "@utils/constants";

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard = ({ movie }: MovieCardProps) => {
  const { setMovieToView, setMovieToDelete, setMovieToEdit } =
    useHomePageData();
  const { title, genres, release_date, poster_path } = movie;
  const year = getYearFromDateString(release_date);
  const [imageSrc, setImageSrc] = React.useState(poster_path);

  const handleEdit = React.useCallback(() => {
    setMovieToEdit(movie);
  }, [movie]);

  const handleDelete = React.useCallback(() => {
    setMovieToDelete(movie);
  }, [movie]);

  const handleView = React.useCallback(() => {
    setMovieToView(movie);
  }, [movie]);

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
