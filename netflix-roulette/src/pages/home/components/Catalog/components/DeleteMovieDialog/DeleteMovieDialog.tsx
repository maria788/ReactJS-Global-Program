import * as React from "react";
import { ButtonContainer, DialogHeader } from "@ui/CommonComponents";
import { DialogContent } from "./DeleteMovieDialog.styles";
import { Button } from "@ui/Button";
import { Dialog } from "@ui/Dialog";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@store/reducers";
import { setMovieIdToDelete, deleteMovie } from "@store/actions";

export const DeleteMovieDialog = () => {
  const movieIdToDelete = useSelector(
    ({ appState }: RootState) => appState.movieIdToDelete
  );
  const dispatch = useDispatch();
  const handleDialogClose = () => dispatch(setMovieIdToDelete({ movieId: null }));

  return (
      movieIdToDelete && (
      <Dialog width={686} height={272} handleDialogClose={handleDialogClose}>
        <DialogHeader>Delete movie</DialogHeader>
        <DialogContent>
          Are you sure you want to delete this movie?
        </DialogContent>
        <ButtonContainer>
          <Button handleClick={() => dispatch(deleteMovie({ movieId: movieIdToDelete }))}
                   isFilled text="Confirm" />
        </ButtonContainer>
      </Dialog>
    )
  );
};
