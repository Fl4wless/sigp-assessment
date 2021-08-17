import React from "react";
import { render, screen } from "@testing-library/react";
import SearchPage from "../pages/SearchPage";

describe("SearchPage", () => {
  test("input should have empty value on render", () => {
    render(<SearchPage />);
    const input = screen.getByPlaceholderText("search movie", { exact: false });
    expect(input.value).toBe("");
  });
  test("should render basic fields", () => {
    render(<SearchPage />);
    expect(screen.getByText("Search movie")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("search movie", { exact: false })
    ).toBeInTheDocument();
  });
});
