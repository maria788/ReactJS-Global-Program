import * as React from "react";
import { useSearchParams } from "react-router-dom";
import { Select, Option } from "./MoviesSort.styles";
import { useMoviesSearchParams } from "@hooks";
import { MovieToFieldName } from "@utils/constants";

export const MoviesSort = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const moviesSearchParams = useMoviesSearchParams(searchParams);

  const handleSorting = (sortBy: string) => {
    if (sortBy) {
      setSearchParams({ ...moviesSearchParams, sortBy });
    } else {
      const { sortBy, ...data } = moviesSearchParams;
      setSearchParams(data);
    }
  };

  return (
    <div>
      sort by
      <Select
        value={moviesSearchParams.sortBy}
        onChange={(e) => handleSorting(e.target.value)}
      >
        <Option value={MovieToFieldName.RELEASE_DATE}>Release Date</Option>
        <Option value={MovieToFieldName.TITLE}>Title</Option>
      </Select>
    </div>
  );
};
