import * as React from "react";
import { ButtonContainer, DialogHeader } from "@ui/CommonComponents";
import { DialogContent } from "./DeleteMovieDialog.styles";
import { Button } from "@ui/Button";
import { Dialog } from "@ui/Dialog";
import { Movie } from "@utils/interface";

interface DeleteMovieDialogProps {
  movieToDelete: Movie;
  setMovieToDelete: (movieToEdit: Movie) => void;
}

export const DeleteMovieDialog = ({
  movieToDelete,
  setMovieToDelete,
}: DeleteMovieDialogProps) => {
  const handleDialogClose = () => setMovieToDelete(null);

  return (
    movieToDelete && (
      <Dialog width={686} height={272} handleDialogClose={handleDialogClose}>
        <DialogHeader>Delete movie</DialogHeader>
        <DialogContent>
          Are you sure you want to delete this movie?
        </DialogContent>
        <ButtonContainer>
          <Button handleClick={handleDialogClose} isFilled text="Confirm" />
        </ButtonContainer>
      </Dialog>
    )
  );
};
