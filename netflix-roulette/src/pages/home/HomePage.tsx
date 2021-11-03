import * as React from "react";
import { Catalog, Header } from "./components";
import { MovieDetailsContainer } from "../movieDetalis";

export const HomePage = () => (
  <>
    <Header />
    <Catalog />
    <MovieDetailsContainer />
  </>
);
