import * as React from "react";
import { StyledAddMovieButton } from "./AddMovieButton.styles";
import { useHomePageData } from "@data/HomePageDataProvider";

export const AddMovieButton = () => {
  const { setIsAddMovieDialogVisible } = useHomePageData();

  return (
    <StyledAddMovieButton onClick={() => setIsAddMovieDialogVisible(true)}>
      + add movie
    </StyledAddMovieButton>
  );
};
