import * as React from "react";
import { ThemeProvider } from "styled-components";
import { PageContainer } from "./App.styles";
import { ErrorBoundary } from "./ErrorBoundary";
import { HomePage } from "./pages";
import { theme } from "@utils";
import { HomePageDataProvider } from "@data/HomePageDataProvider";

const App = () => (
  <ErrorBoundary>
    <ThemeProvider theme={theme}>
      <PageContainer>
        <HomePageDataProvider>
          <HomePage />
        </HomePageDataProvider>
      </PageContainer>
    </ThemeProvider>
  </ErrorBoundary>
);

export default App;
