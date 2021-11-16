import * as React from "react";
import { fireEvent, render, RenderResult } from "@testing-library/react";
import "@testing-library/jest-dom";
import { SearchBar } from "./SearchBar";
import { ThemeProvider } from "styled-components";
import { theme } from "@utils/theme";
import { MemoryRouter } from "react-router-dom";

const setSearchParamsMock = jest.spyOn(URLSearchParams.prototype, "get");

const renderComponent = (children: React.ReactElement): RenderResult =>
  render(
    <ThemeProvider theme={theme}>
      <MemoryRouter>{children}</MemoryRouter>
    </ThemeProvider>
  );

describe("SearchBar", () => {
  let component: RenderResult;

  beforeEach(() => {
    component = renderComponent(<SearchBar />);
  });

  test("SearchBar should be rendered correctly", () => {
    const { asFragment } = component;

    expect(asFragment()).toMatchSnapshot();
  });

  test("button test should be correct", () => {
    const { getByText } = component;
    const element = getByText("Search");

    expect(element).toBeInTheDocument();
  });

  test("onClick event should be triggered", () => {
    const { getByRole } = component;
    fireEvent.click(getByRole("button"));

    expect(setSearchParamsMock).toHaveBeenCalled();
  });

  test("onChange event should trigger input value update", () => {
    const { getByLabelText } = component;
    const input = getByLabelText("searchInput");

    fireEvent.change(input, { target: { value: "test" } });

    expect(input.value).toBe("test");
  });

  test("url should be updated with input data", () => {
    const { getByLabelText, getByRole } = component;

    fireEvent.change(getByLabelText("searchInput"), {
      target: { value: "test" },
    });
    fireEvent.click(getByRole("button"));

    expect(setSearchParamsMock).toHaveBeenCalledWith("searchQuery");
  });
});
