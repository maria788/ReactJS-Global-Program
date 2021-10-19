import * as React from "react";
import { GENRES } from "@utils";
import { Tabs, Tab } from "./GenresTabs.styles";
import { useHomePageData } from "@data/HomePageDataProvider";
import { GenreType } from "@utils/constants";

export const GenresTabs = () => {
  const { selectedGenre, setSelectedGenre } = useHomePageData();

  return (
    <Tabs>
      {GENRES.map((genre: GenreType) => (
        <Tab
          key={genre}
          isSelected={selectedGenre === genre}
          onClick={() => setSelectedGenre(genre)}
        >
          {genre}
        </Tab>
      ))}
    </Tabs>
  );
};
