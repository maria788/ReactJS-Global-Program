export interface Theme {
  palette: {
    white: string;
    grey: string;
    darkGrey: string;
    lightGrey: string;
    red: string;
  };
  fontSize: string;
  borderRadius: string;
}

export const theme: Theme = {
  palette: {
    white: "#fff",
    grey: "#424242",
    darkGrey: "#232323",
    lightGrey: "#555555",
    red: "#f65261",
  },
  fontSize: "20px",
  borderRadius: "4px",
};
