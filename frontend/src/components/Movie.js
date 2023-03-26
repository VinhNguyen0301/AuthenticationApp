import React from "react";

import classes from "./Movie.module.css";

const Movie = (props) => {
  const movieDescriptionHandler = () => {
    console.log("Click to change description");
  };

  return (
    <li className={classes.movie} onClick={movieDescriptionHandler}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
    </li>
  );
};

export default Movie;
