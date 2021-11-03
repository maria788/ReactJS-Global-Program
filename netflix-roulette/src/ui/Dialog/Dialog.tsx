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
  onSubmit?: (e?: React.FormEvent<HTMLFormElement>) => void;
}

export const Dialog = ({
  width,
  height,
  handleDialogClose,
  onSubmit,
  children,
}: DialogProps) => (
  <DialogContainer onSubmit={onSubmit}>
    <DialogComponent width={width} height={height}>
      <CloseDialogButton onClick={handleDialogClose}>X</CloseDialogButton>
      {children}
    </DialogComponent>
  </DialogContainer>
);
