import * as React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { PageContainer } from "./App.styles";
import { ErrorBoundary } from "./ErrorBoundary";
import { theme } from "@utils";
import { HomePage } from "./pages";
import store from "@store/store";
import { NoMatch } from "./pages/noMatch";

const App = () => (
  <ErrorBoundary>
    <ThemeProvider theme={theme}>
      <PageContainer>
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Navigate to="/search" />} />
              <Route path="/search" element={<HomePage />} />
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </BrowserRouter>
        </Provider>
      </PageContainer>
    </ThemeProvider>
  </ErrorBoundary>
);

export default App;
