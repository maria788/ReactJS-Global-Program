import styled from "styled-components";

export const DialogContainer = styled.form`
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

export const DialogComponent = styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  width: ${({ width }: { width: number; height: number }) => `${width}px`};
  height: ${({ height }: { width: number; height: number }) => `${height}px`};
  margin: 0 auto;
  padding: 60px 50px;
  background-color: ${(props) => props.theme.palette.darkGrey};
`;

export const CloseDialogButton = styled.button`
  float: right;
  border: none;
  outline: none;
  background: none;
  color: ${(props) => props.theme.palette.white};
`;