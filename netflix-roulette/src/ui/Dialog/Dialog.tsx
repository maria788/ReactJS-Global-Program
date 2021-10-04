import * as React from "react";
import {
  DialogContainer,
  CloseDialogButton,
  DialogComponent,
} from "@ui/Dialog/DialogStyles";

interface DialogProps {
  width: number;
  height: number;
  handleDialogClose: any;
  children: React.ReactNode;
}

export const Dialog = ({
  width,
  height,
  handleDialogClose,
  children,
}: DialogProps) => (
  <DialogContainer>
    <DialogComponent width={width} height={height}>
      <CloseDialogButton onClick={handleDialogClose}>X</CloseDialogButton>
      {children}
    </DialogComponent>
  </DialogContainer>
);
