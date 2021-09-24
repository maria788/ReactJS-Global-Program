import * as React from "react";
import { Select, Option } from "./MoviesSort.styles";

export const MoviesSort = () => {
  return (
    <div>
      sort by
      <Select>
        <Option value="releaseDate">Release Date</Option>
      </Select>
    </div>
  );
};
