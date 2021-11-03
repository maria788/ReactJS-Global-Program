import * as React from "react";
import {
  ErrorMessage,
  FieldInputContainer,
  Label,
  Select,
} from "./FieldInput.styles";
import { GENRES, GenreType } from "@utils";
import { useFormikContext } from "formik";

interface FieldSelectProps {
  label: string;
  placeholder: string;
  value?: string[];
  name: string;
  isRequired?: boolean;
}

export const FieldSelect = ({
  label,
  placeholder,
  value,
  name,
  isRequired = false,
}: FieldSelectProps) => {
  const { handleChange, handleBlur, errors, touched } = useFormikContext();

  return (
    <FieldInputContainer>
      <Label>
        {label} {isRequired && "*"}
      </Label>
      <Select
        defaultValue={(value && value[0]) || ""}
        name={name}
        onChange={handleChange}
        onBlur={handleBlur}
      >
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
      {errors[name] && touched[name] && (
        <ErrorMessage>{errors[name]}</ErrorMessage>
      )}
    </FieldInputContainer>
  );
};
