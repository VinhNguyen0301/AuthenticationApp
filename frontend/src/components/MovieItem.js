import React, { useState } from "react";

import classes from "./Movie.module.css";

const MovieItem = (movie) => {
  console.log("11111", movie);
  // const [movieData, setMovieData] = useState(movie)
  const movieDescriptionHandler = () => {
    console.log("Click to change description");
  };

  return (
    <li className={classes.movie} onClick={movieDescriptionHandler}>
      <h2>{movie.title}</h2>
      <h3>{movie.releaseDate}</h3>
      <p>{movie.openingText}</p>
    </li>
  );
};

export default MovieItem;
