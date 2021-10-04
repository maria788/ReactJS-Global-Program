import * as React from "react";
import { Select, Option } from "./MoviesSort.styles";

export const MoviesSort = () => {
  return (
    <div>
      sort by
      <Select defaultValue="releaseDate">
        <Option value="releaseDate">Release Date</Option>
      </Select>
    </div>
  );
};
