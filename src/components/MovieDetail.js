import React, { useState } from "react";
import classes from "../styles/MovieDetail.module.css";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";
import { IconButton } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { addMovie, removeMovie, selectMovie } from "../features/movieSlice";
import { useEffect } from "react";

const MovieDetail = ({ movie }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useDispatch();
  const isInStore = useSelector(selectMovie);
  const imdbID = movie.imdbID;
  const thisMovie = isInStore.filter((item) => item.imdbID === movie.imdbID);

  useEffect(() => {
    if (thisMovie.length === 0) {
      setIsFavorite(false);
    } else {
      setIsFavorite(true);
    }
  }, [thisMovie.length]);

  const handleAddFavorite = () => {
    dispatch(addMovie({ movie }));
  };
  const handleRemoveFavorite = () => {
    dispatch(removeMovie({ imdbID }));
  };

  return (
    <div className={classes.detail}>
      <div className={classes.image}>
        <img src={movie.Poster} alt={movie.Title} />
      </div>
      <div className={classes.info}>
        <header>
          <IconButton
            className={classes.star}
            onClick={!isFavorite ? handleAddFavorite : handleRemoveFavorite}
          >
            {isFavorite ? (
              <StarIcon className={classes.starFavorite} />
            ) : (
              <StarBorderIcon className={classes.starIcon} />
            )}
          </IconButton>
          <h1>{movie.Title}</h1>
          <p>({movie.Year})</p>
          <h2>Directed by {movie.Director}</h2>
          <p>
            <b>Genre:</b> {movie.Genre}
          </p>
        </header>
        <div className={classes.about}>
          <p>{movie.Plot}</p>
          <p>
            <b>Stars:</b> <span>{movie.Actors}</span>
          </p>
        </div>
        <div className={classes.rating}>
          <p>{movie.imdbRating}/10</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
