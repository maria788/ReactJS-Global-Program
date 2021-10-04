import styled from "styled-components";

export const MovieCardContainer = styled.div`
  flex-direction: column;
  margin: 0 20px 40px 0;
  color: ${(props) => props.theme.palette.light};
`;

export const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MovieYear = styled.div`
  padding: 5px 10px;
  border: 1px solid ${(props) => props.theme.palette.light};
  border-radius: 4px;
`;

export const MovieGenres = styled.div`
  font-size: 17px;
`;

export const MovieDescription = styled.div`
  width: 325px;
`;
