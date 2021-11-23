import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.hydrate(
  <React.StrictMode>
    <App Router={BrowserRouter} />
  </React.StrictMode>,
  document.getElementById("root")
);
