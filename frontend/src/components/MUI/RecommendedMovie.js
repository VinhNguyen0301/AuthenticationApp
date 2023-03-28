import { Box, CardMedia } from "@mui/material";
import React from "react";
import "./ListMovie.css";
import defaultMovie from "../../assets/img/test.jpg";

const RecommendedMovie = (props) => {
  console.log("recom 111", props);
  return (
    <div className="item">
      {props.movies.results.slice(0, 5).map((d) => {
        return (
          <Box marginLeft="15px" marginTop="10px" maxWidth="200px">
            <CardMedia
              component="img"
              image={
                d.poster_path !== null
                  ? `https://image.tmdb.org/t/p/w200/${d.poster_path}`
                  : defaultMovie
              }
              alt="Test"
            />
            <h4>{d.title}</h4>
          </Box>
        );
      })}
    </div>
  );
};

export default RecommendedMovie;
