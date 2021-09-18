import React from "react";
import "./App.css";
import { AppHome, Counter, HelloWorld } from "./components";
import { Box } from "@material-ui/core";

function App() {
  return (
      <Box
          mt={3}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
      >
        <HelloWorld name="World" />
        <Counter />
        <AppHome />
      </Box>
  );
}

export default App;
