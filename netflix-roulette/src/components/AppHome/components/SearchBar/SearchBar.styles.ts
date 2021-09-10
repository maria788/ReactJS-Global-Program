import { Button, TextField, withStyles } from "@material-ui/core";

export const StyledButton = withStyles({
  root: {
    backgroundColor: "#f65261",
    color: "#ffffff",
    "&:hover": {
      backgroundColor: "#d24754",
    },
  },
})(Button);

export const StyledTextField = withStyles({
  root: {
    width: "700px",
    color: "#ffffff",
    backgroundColor: "rgba(50, 50, 50, 0.8)",
  },
})(TextField);
