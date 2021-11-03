import styled from "styled-components";
import { Theme } from "@utils/theme";

export const StyledButton = styled.button(
  ({
    isFilled,
    theme,
    disabled,
  }: {
    isFilled: boolean;
    theme?: Theme;
    disabled: boolean;
  }) => ({
    width: "177px",
    height: "46px",
    border: `${isFilled ? "none" : "1px solid " + theme.palette.red}`,
    borderRadius: `${theme.borderRadius}`,
    marginLeft: "20px",
    color: `${isFilled ? theme.palette.white : theme.palette.red}`,
    backgroundColor: `${
      disabled
        ? theme.palette.lightRed
        : isFilled
        ? theme.palette.red
        : "rgba(0, 0, 0, 0)"
    }`,
  })
);
