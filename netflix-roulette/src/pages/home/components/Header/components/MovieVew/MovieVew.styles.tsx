import styled from "styled-components";

export const MovieContainer = styled.div`
  display: flex;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
`;

export const MovieTitle = styled.div`
  font-size: 40px;
  text-transform: uppercase;
`;

export const MovieGenres = styled.div`
  font-size: 17px;
  margin-top: 10px;
  color: ${(props) => props.theme.palette.light};
`;

export const MovieYearWithDuration = styled.div`
  font-size: 29px;
  padding: 30px 0;
  color: ${(props) => props.theme.palette.red};
`;

export const MovieYear = styled.span`
  font-size: 29px;
  margin-right: 20px;
`;

export const MovieDescription = styled.div`
  width: 700px;
  color: ${(props) => props.theme.palette.light};
`;
