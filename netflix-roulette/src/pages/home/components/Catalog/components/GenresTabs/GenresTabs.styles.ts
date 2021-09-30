import styled from "styled-components";

export const Tabs = styled.div`
  display: flex;
  height: 50px;
`;

export const Tab = styled.button(({ theme, isSelected }) => {
  const {
    fontSize,
    palette: { red, grey, white },
  } = theme;
  const borderBottom = isSelected ? `3px solid ${red}` : `1px solid ${grey}`;

  return {
    border: 0,
    outline: 0,
    padding: `0 ${fontSize}`,
    borderBottom,
    textTransform: "uppercase",
    background: "none",
    color: `${white}`,
    cursor: "pointer",

    "&:hover": {
      borderBottom: `3px solid ${red}`,
    },
  };
});
