import * as React from "react";
import { Provider } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ErrorBoundary } from "./ErrorBoundary";
import { theme } from "@utils";
import { HomePage } from "./pages";
import store from "@store/store";
import { NoMatch } from "./pages/noMatch";

function RedirectWithStatus({ to, status }: { to: string; status: number }) {
  return (
    <Route>
      {({ staticContext }) => {
        if (staticContext) staticContext.status = status;
        return <Navigate to={to} />;
      }}
    </Route>
  );
}

const App = ({ Router, location, context }) => (
  <ErrorBoundary>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router location={location} context={context}>
          <Routes>
            <RedirectWithStatus status={301} to="/search" />
            <Route path="/" element={<Navigate to="/search" />} />
            <Route path="/search" element={<HomePage />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </Router>
      </Provider>
    </ThemeProvider>
  </ErrorBoundary>
);

export default App;
