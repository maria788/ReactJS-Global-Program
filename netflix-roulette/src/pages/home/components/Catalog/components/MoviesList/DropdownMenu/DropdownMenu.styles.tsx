import styled from "styled-components";

export const StyledDropdownMenu = styled.div`
  position: absolute;
  right: 20px;
  top: 0;
  width: 32px;
  height: 32px;
  margin: 20px auto;
  border-radius: 50%;
  background: ${(props) => props.theme.palette.light};
  cursor: pointer;

  :before {
    content: "";
    position: absolute;
    left: 50%;
    top: 6px;
    margin-left: -2px;
    background: ${(props) => props.theme.palette.red};
    border-radius: 50%;
    width: 4px;
    height: 4px;
    box-shadow: 0 8px ${(props) => props.theme.palette.red},
      0 16px ${(props) => props.theme.palette.red};
  }
`;

export const MenuContainer = styled.div(({ isOpen, theme }) => ({
  position: "absolute",
  display: isOpen ? "flex" : "none",
  flexDirection: "column",
  right: "20px",
  top: "70px",
  minWidth: "160px",
  backgroundColor: theme.palette.darkGrey,
  color: theme.palette.white,
  zIndex: 1,
}));

export const MenuItem = styled.button`
    display: flex;
    flex-direction: column;
    right: 20px;,
    top: 70px;
    min-width: 160px;
    border: none;
    background-color:  ${(props) => props.theme.palette.darkGrey};
    color:  ${(props) => props.theme.palette.white};
    z-index: 1;
`;

export const CloseMenuButton = styled.button`
  position: relative;
  display: flex;
  align-self: flex-end;
  border: none;
  outline: none;
  color: ${(props) => props.theme.palette.white};
  background-color: ${(props) => props.theme.palette.darkGrey};
  cursor: pointer;
`;
