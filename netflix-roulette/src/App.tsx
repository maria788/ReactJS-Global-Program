import * as React from "react";
import { ThemeProvider } from "styled-components";
import { PageContainer } from "./App.styles";
import { ErrorBoundary } from "./ErrorBoundary";
import { HomePage } from "./pages";
import { theme } from "@utils";

const App = () => (
  <ErrorBoundary>
    <ThemeProvider theme={theme}>
      <PageContainer>
        <HomePage />
      </PageContainer>
    </ThemeProvider>
  </ErrorBoundary>
);

export default App;
