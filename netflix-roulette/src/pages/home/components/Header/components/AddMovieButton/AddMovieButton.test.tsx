import * as React from "react";
import { render, fireEvent, RenderResult } from "@testing-library/react";
import { AddMovieButton } from "./AddMovieButton";
import { ThemeProvider } from "styled-components";
import { theme } from "@utils/theme";
import "@testing-library/jest-dom";
import reactRedux from "react-redux";

const renderComponent = (children: React.ReactElement): RenderResult =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);

const mockUseDispatch = jest.spyOn(reactRedux, "useDispatch");

jest.mock("react-redux", () => {
  return {
    useDispatch: () => mockUseDispatch,
  };
});

describe("AddMovieButton", () => {
  let component: RenderResult;

  beforeEach(() => {
    component = renderComponent(<AddMovieButton />);
  });

  test("AddMovieButton should be rendered correctly", () => {
    const { asFragment } = component;

    expect(asFragment()).toMatchSnapshot();
  });

  test("button test should be correct", () => {
    const { getByText } = component;

    const element = getByText("+ add movie");

    expect(element).toBeInTheDocument();
  });

  test("onClick event should be triggered", () => {
    const { getByRole } = component;

    fireEvent.click(getByRole("button"));

    expect(mockUseDispatch).toHaveBeenCalled();
  });
});
