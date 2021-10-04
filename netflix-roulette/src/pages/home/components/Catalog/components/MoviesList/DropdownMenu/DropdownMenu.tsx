import * as React from "react";
import {
  StyledDropdownMenu,
  MenuContainer,
  MenuItem,
  CloseMenuButton,
} from "./DropdownMenu.styles";

interface DropdownMenuProps {
  handleEdit: () => void;
  handleDelete: () => void;
}

export const DropdownMenu = ({
  handleEdit,
  handleDelete,
}: DropdownMenuProps) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);

  return (
    <>
      <StyledDropdownMenu onClick={() => setIsMenuOpen(true)} />
      <MenuContainer isOpen={isMenuOpen}>
        <CloseMenuButton onClick={() => setIsMenuOpen(false)}>
          X
        </CloseMenuButton>
        <MenuItem
          onClick={() => {
            handleEdit();
            setIsMenuOpen(false);
          }}
        >
          Edit
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleDelete();
            setIsMenuOpen(false);
          }}
        >
          Delete
        </MenuItem>
      </MenuContainer>
    </>
  );
};
