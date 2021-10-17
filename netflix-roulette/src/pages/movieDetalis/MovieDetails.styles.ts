import styled from "styled-components";

export const MovieDetailsContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.75);
`;

export const MovieDetailsDialog = styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  width: 980px;
  height: 720px;
  margin: 0 auto;
  padding: 60px 50px;
  background-color: ${(props) => props.theme.palette.darkGrey};
`;

export const DialogColumnsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;

export const DialogColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
