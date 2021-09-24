import styled from "styled-components";
import { Theme } from "../../../../../../utils";

export const Tabs = styled.div`
  display: flex;
  height: 50px;
`;

export const Tab = styled.button`
  border: 0;
  outline: 0;
  padding: 0 ${(props) => props.theme.fontSize};
  border-bottom: ${({
    isSelected,
    theme,
  }: {
    isSelected: boolean;
    theme?: Theme;
  }) =>
    isSelected
      ? `3px solid ${theme.palette.red};`
      : `1px solid  ${theme.palette.grey}`};
  text-transform: uppercase;
  background: none;
  color: ${(props) => props.theme.palette.white};
  cursor: pointer;

  :hover {
    border-bottom: 3px solid ${(props) => props.theme.palette.red};
  }
`;
