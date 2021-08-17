import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { removeMovie } from "../features/movieSlice";
import classes from "../styles/FavoritePage.module.css";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";

const FavoritePage = () => {
  const [favorites, setFavorites] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const favoriteMovies = JSON.parse(localStorage.getItem("movies"));
    setFavorites(favoriteMovies);
  }, [favorites]);

  const handleRemoveFavorite = (imdbID) => {
    dispatch(removeMovie({ imdbID }));
  };

  return (
    <div className={classes.favorite}>
      {favorites.length > 0 ? (
        <ul>
          {favorites.map((favorite) => (
            <li key={favorite.imdbID}>
              <div className={classes.img}>
                <img src={favorite.Poster} alt="" />
              </div>
              <div>
                <h2>{favorite.Title}</h2>
                <p>by {favorite.Director}</p>
              </div>
              <RemoveCircleOutlineIcon
                className={classes.remove}
                onClick={() => handleRemoveFavorite(favorite.imdbID)}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>You don't have any movies saved.</p>
      )}
    </div>
  );
};

export default FavoritePage;
