import * as React from "react";
import { Movie } from "@utils/interface";
import {
  DetailsContainer,
  MovieContainer,
  MovieTitle,
  MovieYearWithDuration,
  MovieGenres,
  MovieYear,
  MovieDescription,
} from "./MovieVew.styles";
import { formatDuration, getYearFromDateString } from "@utils/utils";

interface MovieVewProps {
  movie: Movie;
}

export const MovieVew = ({ movie }: MovieVewProps) => {
  const { title, poster_path, genres, release_date, runtime, overview } = movie;
  const year = getYearFromDateString(release_date);
  const duration = formatDuration(runtime);

  return (
    <MovieContainer>
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
      <DetailsContainer>
        <MovieTitle>{title}</MovieTitle>
        <MovieGenres>{genres.join(", ")}</MovieGenres>
        <MovieYearWithDuration>
          <MovieYear>{year}</MovieYear>
          {duration}
        </MovieYearWithDuration>
        <MovieDescription>{overview}</MovieDescription>
      </DetailsContainer>
    </MovieContainer>
  );
};
