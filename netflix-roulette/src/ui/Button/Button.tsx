import * as React from "react";
import { StyledButton } from "@ui/Button/Button.styles";

interface ButtonProps {
  text: string;
  isFilled?: boolean;
  handleClick?: () => void;
  type?: "button" | "submit" | "reset";
  isSubmitting?: boolean;
  isDisabled?: boolean;
}

export const Button = ({
  handleClick,
  isFilled = false,
  text,
  type = "button",
  isSubmitting = false,
  isDisabled = false,
}: ButtonProps) => {
  return (
    <StyledButton
      onClick={handleClick}
      isFilled={isFilled}
      type={type}
      disabled={isDisabled}
    >
      {isSubmitting ? "loading..." : text}
    </StyledButton>
  );
};
