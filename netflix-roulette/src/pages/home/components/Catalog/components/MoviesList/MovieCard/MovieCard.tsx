import * as React from "react";
import { dateStringToDate, Movie } from "@utils";
import {
  MovieCardContainer,
  MovieDescription,
  MovieGenres,
  MovieYear,
  TitleRow,
} from "./MovieCard.styles";
import { DropdownMenu } from "../DropdownMenu";

interface MovieCardProps {
  movie: Movie;
  handleMovieEdit: (movie: Movie) => void;
  handleMovieDelete: (movie: Movie) => void;
}

export const MovieCard = ({
  movie,
  handleMovieEdit,
  handleMovieDelete,
}: MovieCardProps) => {
  const { title, genres, release_date, poster_path } = movie;
  const year = new Date(dateStringToDate(release_date)).getFullYear();

  const handleEdit = () => handleMovieEdit(movie);
  const handleDelete = () => handleMovieDelete(movie);

  return (
    <MovieCardContainer>
      <img
        src={poster_path}
        alt={title}
        width={323}
        height={486}
        onError={(e: React.SyntheticEvent<HTMLImageElement>) =>
          ((e.target as HTMLImageElement).src =
            "../../../../../../../../assets/not_found.png")
        }
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
