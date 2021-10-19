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
      <Select defaultValue={(value && value[0]) || ""}>
        <option value="" disabled>
          {placeholder}
        </option>
        {GENRES.map(
          (genre: GenreType) =>
            genre !== GenreType.ALL && (
              <option key={genre} value={genre}>
                {genre}
              </option>
            )
        )}
      </Select>
    </FieldInputContainer>
  );
};
