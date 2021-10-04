import * as React from "react";
import { FieldInputContainer, Input, Label } from "./FieldInput.styles";

interface FieldInputProps {
  label: string;
  value?: string | number;
  placeholder?: string;
  type?: string;
  isWide?: boolean;
}

export const FieldInput = ({
  label,
  value,
  placeholder,
  type = "text",
  isWide = false,
}: FieldInputProps) => {
  return (
    <FieldInputContainer>
      <Label>{label}</Label>
      <Input
        isWide={isWide}
        type={type}
        placeholder={placeholder}
        defaultValue={value}
      />
    </FieldInputContainer>
  );
};
