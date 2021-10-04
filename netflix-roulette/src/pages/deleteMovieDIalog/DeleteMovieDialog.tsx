import * as React from "react";
import { ButtonContainer, DialogHeader } from "@ui/CommonComponents";
import { DialogContent } from "./DeleteMovieDialog.styles";
import { Button } from "@ui/Button";
import { useHomePageData } from "@data/HomePageDataProvider";
import { Dialog } from "@ui/Dialog";

export const DeleteMovieDialog = () => {
  const { movieToDelete, setMovieToDelete } = useHomePageData();
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
