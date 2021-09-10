import * as React from "react";
import { Button } from "@material-ui/core";

interface CounterButtonProps {
  handleClick: (e: React.MouseEvent) => void;
  content: string;
}

export const CounterButton: React.FC<CounterButtonProps> = ({
  handleClick,
  content,
}) => (
  <Button onClick={handleClick} variant="contained" color="primary">
    {content}
  </Button>
);
