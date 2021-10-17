import styled from "styled-components";

export const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-self: center;
  width: 1230px;
  height: 300px;
`;

export const Input = styled.input`
  width: 713px;
  height: 57px;
  margin-right: 15px;
  padding-left: 1rem;
  border: none;
  border-radius: 4px;
  background-color: rgba(50, 50, 50, 0.8);
  color: ${(props) => props.theme.palette.white};
`;

export const Button = styled.button`
  width: 233px;
  height: 57px;
  border: none;
  border-radius: 4px;
  color: #fff;
  background-color: ${(props) => props.theme.palette.red};
`;

export const SearchBarText = styled.div`
  font-size: 40px;
  text-transform: uppercase;
`;
