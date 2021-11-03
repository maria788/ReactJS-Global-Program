import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { GENRES } from "@utils";
import { Tabs, Tab } from "./GenresTabs.styles";
import { GenreType } from "@utils/constants";
import { filterMovies } from "@store/actions";
import { RootState } from "@store/reducers";

export const GenresTabs = () => {
  const { selectedGenre, searchText } = useSelector(
    ({ moviesState }: RootState) => moviesState
  );
  const dispatch = useDispatch();

  return (
    <Tabs>
      {GENRES.map((genre: GenreType) => (
        <Tab
          key={genre}
          isSelected={selectedGenre === genre}
          onClick={() =>
            dispatch(filterMovies({ selectedGenre: genre, searchText }))
          }
        >
          {genre}
        </Tab>
      ))}
    </Tabs>
  );
};