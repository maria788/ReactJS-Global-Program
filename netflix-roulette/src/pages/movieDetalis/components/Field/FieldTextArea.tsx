import * as React from "react";
import { FieldInputContainer, Label, TextArea } from "./FieldInput.styles";

interface FieldTextAreaProps {
  label: string;
  placeholder: string;
  value?: string;
}

export const FieldTextArea = ({
  label,
  placeholder,
  value,
}: FieldTextAreaProps) => {
  return (
    <FieldInputContainer>
      <Label>{label}</Label>
      <TextArea placeholder={placeholder} value={value} rows={10} />
    </FieldInputContainer>
  );
};
