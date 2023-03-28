import { Box, CardMedia } from "@mui/material";
import React from "react";

const ListMovieItem = (props) => {
  return (
    //https://image.tmdb.org/t/p/w500/vJU3rXSP9hwUuLeq8IpfsJShLOk.jpg
    <Box marginLeft="15px" marginTop="10px">
      <CardMedia
        component="img"
        image={`https://image.tmdb.org/t/p/w300/${props.poster}`}
        alt="Test"
      />
      <h4>{props.title}</h4>
    </Box>
  );
};

export default ListMovieItem;
