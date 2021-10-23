import * as React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { PageContainer } from "./App.styles";
import { ErrorBoundary } from "./ErrorBoundary";
import { theme } from "@utils";
import { HomePage } from "./pages";
import store from "@store/store";

const App = () => (
  <ErrorBoundary>
    <ThemeProvider theme={theme}>
      <PageContainer>
        <Provider store={store}>
          <HomePage />
        </Provider>
      </PageContainer>
    </ThemeProvider>
  </ErrorBoundary>
);

export default App;
