import { Box, CardMedia, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import "./CardDetail.css";

const CardDetail = (movies) => {
  console.log("22222222", movies);
  const Title = styled("div")({
    color: "#1d1e1f",
    lineHeight: "48px",
    fontSize: "2.5rem",
    marginBottom: 0,
    marginTop: "10%",
  });
  return (
    <div>
      <Grid container spacing={2} backgroundColor="white">
        <Grid xs={5} height="100%">
          <Box width="80%" alignItems="center" justifyContent="center">
            <CardMedia
              className="img-style"
              component="img"
              width="400px"
              height="100%"
              image={`https://image.tmdb.org/t/p/w400/${movies.movie.poster_path}`}
              alt="Test"
            />
          </Box>
        </Grid>
        <Grid xs={7}>
          <Title>{movies.movie.title}</Title>
          <div className="des-movie">
            <span className="bold-css">Release Date:</span>{" "}
            {movies.movie.release_date}
          </div>
          <div className="des-movie">
            <span className="bold-css">Genre:</span>{" "}
            {movies.movie.genres.map((d) => {
              return d["name"];
            })}
          </div>
          <div className="des-movie">{movies.movie.overview}</div>
          <div className="des-movie bold-css">Directed By</div>
          <div className="des2-movie">Martin McDonagh</div>
        </Grid>
      </Grid>
    </div>
  );
};

export default CardDetail;
