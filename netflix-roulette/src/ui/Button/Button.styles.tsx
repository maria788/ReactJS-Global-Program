import styled from "styled-components";
import { Theme } from "@utils/theme";

export const StyledButton = styled.button(
  ({ isFilled, theme }: { isFilled: boolean; theme?: Theme }) => ({
    width: "177px",
    height: "46px",
    border: `${isFilled ? "none" : "1px solid " + theme.palette.red}`,
    borderRadius: `${theme.borderRadius}`,
    marginLeft: "20px",
    color: `${isFilled ? theme.palette.white : theme.palette.red}`,
    backgroundColor: `${isFilled ? theme.palette.red : "rgba(0, 0, 0, 0)"}`,
  })
);
