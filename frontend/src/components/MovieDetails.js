import React from "react";
import classes from "./Movie.module.css";

const MovieDetails = (movie) => {
  console.log("movie detail comp", movie);
  return (
    <div>
      <li className={classes.movie}>
        <h2>{movie.movie.title}</h2>
        <h3>{movie.movie.releaseDate}</h3>
        <p>{movie.movie.openingText}</p>
      </li>
    </div>
  );
};

export default MovieDetails;
