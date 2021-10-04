import * as React from "react";
import { FieldInputContainer, Label, Select } from "./FieldInput.styles";
import { GENRES, GenreType } from "@utils";

interface FieldSelectProps {
  label: string;
  placeholder: string;
  value?: string[];
}

export const FieldSelect = ({
  label,
  placeholder,
  value,
}: FieldSelectProps) => {
  return (
    <FieldInputContainer>
      <Label>{label}</Label>
      <Select>
        <option value="" selected disabled>
          {placeholder}
        </option>
        {GENRES.map(
          (genre) =>
            genre !== GenreType.ALL && (
              <option value={genre} selected={value?.indexOf(genre) >= 0}>
                {genre}
              </option>
            )
        )}
      </Select>
    </FieldInputContainer>
  );
};
