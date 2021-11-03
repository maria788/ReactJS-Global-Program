import * as React from "react";
import { useFormikContext } from "formik";
import {
  ErrorMessage,
  FieldInputContainer,
  Label,
  TextArea,
} from "./FieldInput.styles";

interface FieldTextAreaProps {
  label: string;
  placeholder: string;
  value?: string;
  name: string;
  isRequired?: boolean;
}

export const FieldTextArea = ({
  label,
  placeholder,
  value,
  name,
  isRequired = false,
}: FieldTextAreaProps) => {
  const { handleChange, handleBlur, errors, touched } = useFormikContext();

  return (
    <FieldInputContainer>
      <Label>
        {label} {isRequired && "*"}
      </Label>
      <TextArea
        placeholder={placeholder}
        defaultValue={value}
        rows={10}
        onChange={handleChange}
        name={name}
        onBlur={handleBlur}
      />
      {errors[name] && touched[name] && (
        <ErrorMessage>{errors[name]}</ErrorMessage>
      )}
    </FieldInputContainer>
  );
};
