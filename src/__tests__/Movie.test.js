import React from "react";
import { render, screen } from "@testing-library/react";
import Movie from "../components/Movie";
import { BrowserRouter as Router } from "react-router-dom";

describe("Movie", () => {
  test("should render movie, when props are passed", () => {
    const movie = {
      title: "test title",
      image:
        "https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640",
      id: 1,
    };
    render(
      <Router>
        <Movie title={movie.title} image={movie.image} id={movie.id} />
      </Router>
    );
    expect(screen.getByText("test title")).toBeInTheDocument();
  });
});
