import * as React from "react";
import { StyledAddMovieButton } from "./AddMovieButton.styles";

interface AddMovieButtonProps {
  handleAddMovieDialogOpen: () => void;
}

export const AddMovieButton = ({
  handleAddMovieDialogOpen,
}: AddMovieButtonProps) => {
  return (
    <StyledAddMovieButton onClick={handleAddMovieDialogOpen}>
      + add movie
    </StyledAddMovieButton>
  );
};
