import React from "react";

import MovieItem from "./MovieItem";
import classes from "./MoviesList.module.css";
import { Link } from "react-router-dom";

const MovieList = (props) => {
  return (
    <ul className={classes["movies-list"]}>
      {props.movies.map((movie) => (
        <Link to={`/movies/${movie.id}`} key={movie.id}>
          <MovieItem
            key={movie.id}
            title={movie.title}
            releaseDate={movie.releaseDate}
            openingText={movie.openingText}
          />
        </Link>
      ))}
    </ul>
  );
};

export default MovieList;
