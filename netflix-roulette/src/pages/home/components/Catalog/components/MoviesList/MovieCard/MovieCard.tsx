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

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard = ({ movie }: MovieCardProps) => {
  const { setMovieToView, setMovieToDelete, setMovieToEdit } =
    useHomePageData();
  const { title, genres, release_date, poster_path } = movie;
  const year = getYearFromDateString(release_date);

  const handleEdit = React.useCallback(() => {
    setMovieToEdit(movie);
  }, [movie]);

  const handleDelete = React.useCallback(() => {
    setMovieToDelete(movie);
  }, [movie]);

  const handleView = React.useCallback(() => {
    setMovieToView(movie);
  }, [movie]);

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
