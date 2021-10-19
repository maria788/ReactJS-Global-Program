import * as React from "react";
import { ResultCountCounter } from "./ResultCount.styles";
import { useHomePageData } from "@data/HomePageDataProvider";

export const ResultCount = () => {
  const { movies } = useHomePageData();

  return (
    <ResultCountCounter>
      <b>{movies.length}</b> movies found
    </ResultCountCounter>
  );
};
