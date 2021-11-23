import * as React from "react";
import { Catalog, Header } from "./components";
import { MovieDetailsContainer } from "../movieDetalis";
import { PageContainer } from "../../App.styles";

export const HomePage = () => (
  <PageContainer>
    <Header />
    <Catalog />
    <MovieDetailsContainer />
  </PageContainer>
);
