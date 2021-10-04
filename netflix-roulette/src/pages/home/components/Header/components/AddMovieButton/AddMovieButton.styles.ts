import styled from "styled-components";

export const StyledAddMovieButton = styled.button`
  width: 177px;
  height: 46px;
  border: none;
  border-radius: ${(props) => props.theme.borderRadius};
  color: ${(props) => props.theme.palette.red};
  background-color: rgba(96, 96, 96, 0.68);
  text-transform: uppercase;
`;
