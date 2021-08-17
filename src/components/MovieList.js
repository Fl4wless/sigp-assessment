import React from "react";
import Movie from "./Movie";

const MovieList = ({ movieList }) => {
  return (
    <ul aria-label="ul">
      {movieList?.map((movie) => (
        <Movie
          title={movie.Title}
          key={movie.imdbID}
          image={movie.Poster}
          id={movie.imdbID}
        />
      ))}
    </ul>
  );
};

export default MovieList;
