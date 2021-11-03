import * as React from "react";
import { useDispatch } from "react-redux";

import { StyledAddMovieButton } from "./AddMovieButton.styles";
import { setIsAddMovieDialogVisible } from "@store/actions";

export const AddMovieButton = () => {
  const dispatch = useDispatch();

  return (
    <StyledAddMovieButton
      onClick={() =>
        dispatch(setIsAddMovieDialogVisible({ isAddMovieDialogVisible: true }))
      }
    >
      + add movie
    </StyledAddMovieButton>
  );
};
