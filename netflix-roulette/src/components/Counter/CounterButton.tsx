import * as React from "react";
import { Button } from "@material-ui/core";

interface CounterButtonProps {
  handleClick: (e: React.MouseEvent) => void;
  content: string;
}

export const CounterButton = ({ handleClick, content }: CounterButtonProps) => (
  <Button onClick={handleClick} variant="contained" color="primary">
    {content}
  </Button>
);
