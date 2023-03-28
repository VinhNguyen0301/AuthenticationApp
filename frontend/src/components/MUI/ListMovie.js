import React from "react";
import { Box, Grid, Stack } from "@mui/material";
import CardMovie from "./CardMovie";
import ListMovieItem from "./ListMovieItem";
import "./ListMovie.css";

const ListMovie = (props) => {
  return (
    <>
      {/* <CardMovie /> */}
      {/* <ListMovieItem movies={props.movies} /> */}
      {props.movies.length > 0 &&
        Array.from({ length: Math.ceil(props.movies.length / 4) }, (_, i) => (
          <div key={`row${i}`} className="item">
            {props.movies.slice(i * 4, (i + 1) * 4).map((movie) => (
              <div>
                <ListMovieItem
                  key={movie.id}
                  title={movie.title}
                  releaseDate={movie.releaseDate}
                  openingText={movie.openingText}
                  poster={movie.poster}
                />
              </div>
            ))}
          </div>
        ))}
      {/* {
      props?.movies?.map((movie) => (
        <Box flex={4} p={2}>
          <ListMovieItem
            key={movie.id}
            title={movie.title}
            releaseDate={movie.releaseDate}
            openingText={movie.openingText}
            poster={movie.poster}
          />
        </Box>
      ))} */}
    </>
  );
};

export default ListMovie;
