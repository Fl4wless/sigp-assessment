import React from "react";
import { render, screen } from "@testing-library/react";
import MovieList from "../components/MovieList";
import { BrowserRouter as Router } from "react-router-dom";

describe("MovieList", () => {
  test("should be empty on load", () => {
    render(<MovieList />);
    const ul = screen.getByLabelText("ul");
    expect(ul.children.length).toEqual(0);
  });

  test("should render movie when passed by props", () => {
    const movieList = [
      {
        title: "test movie",
        key: 1,
        image:
          "https://www.sisega.com.mx/wp-content/uploads/2016/08/ef3-placeholder-image.jpg",
        id: 1,
      },
    ];
    render(
      <Router>
        <MovieList movieList={movieList} />
      </Router>
    );
    const ul = screen.getByLabelText("ul");
    expect(ul.children.length).toEqual(1);
  });

  test("should render all movies that are passed in", () => {
    const movieList = [
      {
        title: "test movie",
        key: 1,
        image:
          "https://www.sisega.com.mx/wp-content/uploads/2016/08/ef3-placeholder-image.jpg",
        id: 1,
      },
      {
        title: "epic movie",
        key: 2,
        image:
          "https://www.sisega.com.mx/wp-content/uploads/2016/08/ef3-placeholder-image.jpg",
        id: 2,
      },
    ];
    render(
      <Router>
        <MovieList movieList={movieList} />
      </Router>
    );
    const ul = screen.getByLabelText("ul");
    expect(ul.children.length).toEqual(2);
    expect(ul.children.length).not.toEqual(1);
  });
  test("should not fetch any movies, when passed empty list", () => {
    const movieList = [];
    render(
      <Router>
        <MovieList movieList={movieList} />
      </Router>
    );
    const ul = screen.getByLabelText("ul");
    expect(ul.children.length).toEqual(0);
  });
});
