import * as React from "react";
import { DialogColumnsContainer, DialogColumn } from "./MovieDetails.styles";
import { FieldInput, FieldTextArea, FieldSelect } from "./components";
import { ButtonContainer, DialogHeader } from "@ui/CommonComponents";
import { Button } from "@ui/Button";
import { useHomePageData } from "@data/HomePageDataProvider";
import { Dialog } from "@ui/Dialog";

export const MovieDetails = () => {
  const {
    movieToEdit,
    isAddMovieDialogVisible,
    setIsAddMovieDialogVisible,
    setMovieToEdit,
  } = useHomePageData();

  const {
    title,
    poster_path,
    genres,
    release_date,
    vote_average,
    runtime,
    overview,
  } = movieToEdit || {};

  const handleDialogClose = React.useCallback(() => {
    isAddMovieDialogVisible && setIsAddMovieDialogVisible(false);
    movieToEdit && setMovieToEdit(null);
  }, [isAddMovieDialogVisible, movieToEdit]);

  return (
    (isAddMovieDialogVisible || movieToEdit) && (
      <Dialog width={980} height={760} handleDialogClose={handleDialogClose}>
        <DialogHeader>{movieToEdit ? "Edit movie" : "Add movie"}</DialogHeader>
        <DialogColumnsContainer>
          <DialogColumn>
            <FieldInput
              label="title"
              placeholder="title"
              isWide={true}
              value={title}
            />
            <FieldInput
              label="movie url"
              placeholder="https://"
              isWide={true}
              value={poster_path}
            />
            <FieldSelect
              label="genre"
              placeholder="Select Genre"
              value={genres}
            />
          </DialogColumn>
          <DialogColumn>
            <FieldInput label="release date" type="date" value={release_date} />
            <FieldInput
              label="rating"
              placeholder="7.8"
              type="number"
              value={vote_average}
            />
            <FieldInput
              label="runtime"
              placeholder="minutes"
              type="number"
              value={runtime}
            />
          </DialogColumn>
        </DialogColumnsContainer>
        <FieldTextArea
          label="overview"
          placeholder="movie description"
          value={overview}
        />
        <ButtonContainer>
          <Button handleClick={handleDialogClose} text="Reset" />
          <Button handleClick={handleDialogClose} isFilled text="Submit" />
        </ButtonContainer>
      </Dialog>
    )
  );
};
