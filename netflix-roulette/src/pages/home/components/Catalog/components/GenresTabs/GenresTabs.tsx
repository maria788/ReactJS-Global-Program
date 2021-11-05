import * as React from "react";
import { GENRES } from "@utils";
import { Tabs, Tab } from "./GenresTabs.styles";
import { GenreType } from "@utils/constants";
import { useSearchParams } from "react-router-dom";
import { useMoviesSearchParams } from "@hooks";

export const GenresTabs = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const moviesSearchParams = useMoviesSearchParams(searchParams);
  const selectedGenre = moviesSearchParams.genre || GenreType.ALL;

  const handleGenreChange = (selectedGenre: GenreType) => {
    if (selectedGenre === GenreType.ALL) {
      const { genre, ...data } = moviesSearchParams;
      setSearchParams(data);
    } else {
      setSearchParams({ ...moviesSearchParams, genre: selectedGenre });
    }
  };

  return (
    <Tabs>
      {GENRES.map((genre: GenreType) => (
        <Tab
          key={genre}
          isSelected={selectedGenre === genre}
          onClick={() => handleGenreChange(genre)}
        >
          {genre}
        </Tab>
      ))}
    </Tabs>
  );
};
