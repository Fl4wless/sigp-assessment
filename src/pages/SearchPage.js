import React, { useRef, useState } from "react";
import classes from "../styles/Searchpage.module.css";
import MovieList from "../components/MovieList";
import { fetchAllMovies } from "../api/api";
import SearchIcon from "@material-ui/icons/Search";

const SearchPage = () => {
  const movie = useRef();
  const [movieList, setMovieList] = useState([]);

  const handleSearchMovies = (e) => {
    e.preventDefault();
    if (movie.current.value === "") return;

    fetchAllMovies(movie.current.value)
      .then((data) => setMovieList(data.Search))
      .catch((error) => alert(error.message));
  };

  return (
    <div className={classes.searchpage}>
      <h1>Search movie</h1>
      <form>
        <input type="text" placeholder="...search movie" ref={movie}></input>
        <button type="submit" onClick={handleSearchMovies}>
          <SearchIcon />
          Search
        </button>
      </form>

      <MovieList movieList={movieList} />
    </div>
  );
};

export default SearchPage;
