import * as React from "react";
import { ResultCountCounter } from "./ResultCount.styles";

interface ResultCountProps {
  resultCount: number;
}

export const ResultCount = ({ resultCount }: ResultCountProps) => {
  return (
    <ResultCountCounter>
      <b>{resultCount}</b> movies found
    </ResultCountCounter>
  );
};
