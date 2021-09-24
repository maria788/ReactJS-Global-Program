import * as React from "react";
import { Movie } from "../../../../../../../utils";
import {
  MovieCardContainer,
  MovieDescription,
  MovieGenres,
  MovieYear,
  TitleRow,
} from "./MovieCard.styles";

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard = ({ movie }: MovieCardProps) => {
  const { title, genres, release_date, poster_path } = movie;
  const year = new Date(release_date).getFullYear();

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
