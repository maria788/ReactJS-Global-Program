import styled from "styled-components";

export const HeaderContainer = styled.header(({ theme, isImgBackground }) => ({
  display: "flex",
  flexDirection: "column",
  height: "630px",
  padding: `${theme.fontSize} 10%`,
  backgroundColor: isImgBackground
    ? "rgba(0, 0, 0, 0.5)"
    : theme.palette.darkGrey,
  backgroundImage: isImgBackground && `url("../../../../../assets/header.png")`,
  backgroundPosition: "center top",
  backgroundSize: "100% auto",
}));

export const TopPanel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 auto;
`;
