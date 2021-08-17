import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "../components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

describe("Navbar", () => {
  test("should render correctly", () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
    expect(screen.getByText("Home")).toBeTruthy();
    expect(screen.getByText("Favorites")).toBeTruthy();
    expect(screen.getByLabelText("ul").children.length).toEqual(2);
  });
});
