import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  height: 630px;
  background-color: rgba(0, 0, 0, 0.5);
  background-image: url("../../../../../assets/header.png");
  background-position: center top;
  background-size: 100% auto;
`;

export const TopPanel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 0 auto 50px;
  padding-top: ${(props) => props.theme.fontSize};
`;
