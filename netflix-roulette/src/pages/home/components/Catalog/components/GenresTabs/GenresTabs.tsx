import * as React from "react";
import { GENRES } from "../../../../../../utils";
import { Tabs, Tab } from "./GenresTabs.styles";

interface GenresTabsProps {
  selectedGenre: string;
  changeGenre(event: React.ChangeEvent<{}>, genre: string): void;
}

export const GenresTabs = ({ selectedGenre, changeGenre }: GenresTabsProps) => (
  <Tabs>
    {GENRES.map((genre: string) => (
      <Tab
        key={genre}
        isSelected={selectedGenre === genre}
        onClick={(e) => changeGenre(e, genre)}
      >
        {genre}
      </Tab>
    ))}
  </Tabs>
);
