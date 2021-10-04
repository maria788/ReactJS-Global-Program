import * as React from "react";
import { Catalog, Header } from "./components";
import { MovieDetails } from "..";
import { DeleteMovieDialog } from "../deleteMovieDIalog";

export const HomePage = () => (
  <>
    <Header />
    <Catalog />
    <MovieDetails />
    <DeleteMovieDialog />
  </>
);
