import * as React from "react";
import { Tabs, Tab } from "@material-ui/core";
import { GENRES } from "../../../../utils";

interface GenresTabsProps {
  selectedGenre: string;
  changeGenre(event: React.ChangeEvent<{}>, genre: string): void;
}

export const GenresTabs = ({ selectedGenre, changeGenre }: GenresTabsProps) => (
  <Tabs value={selectedGenre} onChange={changeGenre}>
    {GENRES.map((genre) => (
      <Tab key={genre} value={genre} label={genre} />
    ))}
  </Tabs>
);
