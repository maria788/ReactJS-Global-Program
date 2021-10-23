import * as React from "react";
import { Catalog, Header } from "./components";
import { MovieDetails } from "..";

export const HomePage = () => (
  <>
    <Header />
    <Catalog />
    <MovieDetails />
  </>
);
