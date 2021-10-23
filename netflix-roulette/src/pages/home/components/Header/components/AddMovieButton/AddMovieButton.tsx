import * as React from "react";
import { connect } from "react-redux";

import { StyledAddMovieButton } from "./AddMovieButton.styles";
import {
  SetIsAddMovieDialogVisible,
  SetIsAddMovieDialogVisiblePayload,
} from "@store/interfaces";
import { setIsAddMovieDialogVisible } from "@store/actions";

interface AddMovieButtonProps {
  setIsAddMovieDialogVisible: (
    payload: SetIsAddMovieDialogVisiblePayload
  ) => SetIsAddMovieDialogVisible;
}

const AddMovieButtonComponent = ({
  setIsAddMovieDialogVisible,
}: AddMovieButtonProps) => (
  <StyledAddMovieButton
    onClick={() =>
      setIsAddMovieDialogVisible({ isAddMovieDialogVisible: true })
    }
  >
    + add movie
  </StyledAddMovieButton>
);

const mapDispatchToProps = {
  setIsAddMovieDialogVisible,
};

export const AddMovieButton = connect(
  null,
  mapDispatchToProps
)(AddMovieButtonComponent);
