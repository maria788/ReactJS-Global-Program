import styled from "styled-components";

export const Select = styled.select`
  width: 200px;
  border: none;
  margin: 3px 20px;
  padding: 3px;
  text-transform: uppercase;
  color: ${(props) => props.theme.palette.white};
  background: none;
`;

export const Option = styled.option`
  color: ${(props) => props.theme.palette.white};
  background: ${(props) => props.theme.palette.grey};
`;
