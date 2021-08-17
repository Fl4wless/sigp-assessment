import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleMovie } from "../api/api";
import MovieDetail from "../components/MovieDetail";

const DetailPage = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const params = useParams();
  const { movieId } = params;

  useEffect(() => {
    fetchSingleMovie(movieId).then((data) => setMovieDetails(data));
  }, []);

  return (
    <div>
      <MovieDetail movie={movieDetails} />
    </div>
  );
};

export default DetailPage;
