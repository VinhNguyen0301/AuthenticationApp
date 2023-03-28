import React from "react";
import CardMovie from "./CardMovie";
import ListMovieItem from "./ListMovieItem";
import "./ListMovie.css";
import { Link } from "react-router-dom";

const ListMovie = (props) => {
  return (
    <>
      {/* <CardMovie /> */}
      {props.movies.length > 0 &&
        Array.from({ length: Math.ceil(props.movies.length / 4) }, (_, i) => (
          <div key={`row${i}`} className="item">
            {props.movies.slice(i * 4, (i + 1) * 4).map((movie) => (
              <Link to={`/movies/${movie.id}`} key={movie.id}>
                <ListMovieItem
                  key={movie.id}
                  title={movie.title}
                  releaseDate={movie.releaseDate}
                  openingText={movie.openingText}
                  poster={movie.poster}
                />
              </Link>
            ))}
          </div>
        ))}
    </>
  );
};

export default ListMovie;
