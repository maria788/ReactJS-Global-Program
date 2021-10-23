import * as React from "react";
import { connect } from "react-redux";
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
import { setMovieToEdit, setMovieToView } from "@store/actions";
import {
  SetMovieToEditOrView,
  SetMovieToEditOrViewPayload,
} from ".@store/interfaces";

interface MovieCardProps {
  movie: Movie;
  setMovieToDelete: (movieToEdit: Movie) => void;
  setMovieToView: (
    payload: SetMovieToEditOrViewPayload
  ) => SetMovieToEditOrView;
  setMovieToEdit: (
    payload: SetMovieToEditOrViewPayload
  ) => SetMovieToEditOrView;
}

export const MovieCardComponent = ({
  movie,
  setMovieToDelete,
  setMovieToView,
  setMovieToEdit,
}: MovieCardProps) => {
  const { title, genres, release_date, poster_path } = movie;
  const year = getYearFromDateString(release_date);
  const [imageSrc, setImageSrc] = React.useState(poster_path);

  const handleEdit = React.useCallback(() => {
    setMovieToEdit({ movie });
  }, [movie]);

  const handleDelete = React.useCallback(() => {
    setMovieToDelete(movie);
  }, [movie]);

  const handleView = React.useCallback(() => {
    setMovieToView({ movie });
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

const mapDispatchToProps = {
  setMovieToView,
  setMovieToEdit,
};

export const MovieCard = connect(null, mapDispatchToProps)(MovieCardComponent);
