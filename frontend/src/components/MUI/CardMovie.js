import { Box, CardMedia } from "@mui/material";
import React from "react";

const CardMovie = () => {
  return (
    <Box>
      <CardMedia
        component="img"
        image="https://lumiere-a.akamaihd.net/v1/images/p_20cs_thebansheesofinisherin_981_807599f8.jpeg?region=0%2C0%2C540%2C810&amp;width=480"
        alt="Test"
      />
      <h4>The Banshees of Inisherin</h4>
    </Box>
  );
};

export default CardMovie;
