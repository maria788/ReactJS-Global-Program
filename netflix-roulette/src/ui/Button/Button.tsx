import * as React from "react";
import { StyledButton } from "@ui/Button/Button.styles";

interface ButtonProps {
  text: string;
  isFilled?: boolean;
  handleClick: () => void;
}

export const Button = ({
  handleClick,
  isFilled = false,
  text,
}: ButtonProps) => {
  return (
    <StyledButton onClick={handleClick} isFilled={isFilled}>
      {text}
    </StyledButton>
  );
};
