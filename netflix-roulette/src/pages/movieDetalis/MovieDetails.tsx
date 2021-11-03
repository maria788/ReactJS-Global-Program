import * as React from "react";
import { useFormikContext } from "formik";
import { DialogColumnsContainer, DialogColumn } from "./MovieDetails.styles";
import { FieldInput, FieldTextArea, FieldSelect } from "./components";
import { ButtonContainer, DialogHeader } from "@ui/CommonComponents";
import { Button } from "@ui/Button";
import { Dialog } from "@ui/Dialog";
import { Movie } from "@utils/interface";
import { MovieToFieldName } from "@utils/constants";

interface MovieDetailsProps {
  handleDialogClose: () => void;
  movieToEdit: Movie | null;
}

export const MovieDetails = ({
  handleDialogClose,
  movieToEdit,
}: MovieDetailsProps) => {
  const { handleSubmit, values, isSubmitting, isValid } =
    useFormikContext<Movie>();

  const isDisabled = !isValid || isSubmitting;

  return (
    <Dialog
      width={980}
      height={760}
      handleDialogClose={handleDialogClose}
      onSubmit={handleSubmit}
    >
      <DialogHeader>{movieToEdit ? "Edit movie" : "Add movie"}</DialogHeader>
      <DialogColumnsContainer>
        <DialogColumn>
          <FieldInput
            label="title"
            placeholder="title"
            isWide={true}
            value={values[MovieToFieldName.TITLE]}
            name={MovieToFieldName.TITLE}
            isRequired={true}
          />
          <FieldInput
            label="movie url"
            placeholder="https://"
            isWide={true}
            value={values[MovieToFieldName.POSTER_PATH]}
            name={MovieToFieldName.POSTER_PATH}
            isRequired={true}
            type="url"
          />
          <FieldSelect
            label="genre"
            placeholder="Select Genre"
            value={values[MovieToFieldName.GENRES]}
            name={MovieToFieldName.GENRES}
            isRequired={true}
          />
        </DialogColumn>
        <DialogColumn>
          <FieldInput
            label="release date"
            type="date"
            value={values[MovieToFieldName.RELEASE_DATE]}
            name={MovieToFieldName.RELEASE_DATE}
          />
          <FieldInput
            label="rating"
            placeholder="7.8"
            type="number"
            value={values[MovieToFieldName.VOTE_AVERAGE]}
            name={MovieToFieldName.VOTE_AVERAGE}
          />
          <FieldInput
            label="runtime"
            placeholder="minutes"
            type="number"
            value={values[MovieToFieldName.RUNTIME]}
            name={MovieToFieldName.RUNTIME}
            isRequired={true}
          />
        </DialogColumn>
      </DialogColumnsContainer>
      <FieldTextArea
        label="overview"
        placeholder="movie description"
        value={values[MovieToFieldName.OVERVIEW]}
        name={MovieToFieldName.OVERVIEW}
        isRequired={true}
      />
      <ButtonContainer>
        <Button handleClick={handleDialogClose} text="Reset" />
        <Button
          isFilled
          text="Submit"
          type="submit"
          isSubmitting={isSubmitting}
          isDisabled={isDisabled}
        />
      </ButtonContainer>
    </Dialog>
  );
};
