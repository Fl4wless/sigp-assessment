import React from "react";

import classes from "../styles/Movie.module.css";
import { Link } from "react-router-dom";

const Movie = ({ title, image, id }) => {
  return (
    <Link to={`/detail/${id}`} className={classes.movie}>
      <div>
        <img src={image} alt="" />
      </div>
      <p>{title}</p>
    </Link>
  );
};

export default Movie;
