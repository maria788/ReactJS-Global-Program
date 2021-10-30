import * as React from "react";
import { useFormikContext } from "formik";
import {
  ErrorMessage,
  FieldInputContainer,
  Input,
  Label,
} from "./FieldInput.styles";

interface FieldInputProps {
  label: string;
  value?: string | number;
  placeholder?: string;
  type?: string;
  isWide?: boolean;
  name: string;
  isRequired?: boolean;
}

export const FieldInput = ({
  label,
  value,
  placeholder,
  type = "text",
  isWide = false,
  name,
  isRequired = false,
}: FieldInputProps) => {
  const { handleChange, handleBlur, errors, touched } = useFormikContext();

  return (
    <>
      <FieldInputContainer>
        <Label>
          {label} {isRequired && "*"}
        </Label>
        <Input
          isWide={isWide}
          type={type}
          placeholder={placeholder}
          defaultValue={value}
          onChange={handleChange}
          onBlur={handleBlur}
          name={name}
        />
        {errors[name] && touched[name] && (
          <ErrorMessage>{errors[name]}</ErrorMessage>
        )}
      </FieldInputContainer>
    </>
  );
};
