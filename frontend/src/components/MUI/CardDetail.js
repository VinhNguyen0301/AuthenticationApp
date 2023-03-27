import { Box, CardMedia, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import "./CardDetail.css";

const CardDetail = () => {
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
              image="https://lumiere-a.akamaihd.net/v1/images/p_20cs_thebansheesofinisherin_981_807599f8.jpeg?region=0%2C0%2C540%2C810"
              alt="Test"
            />
          </Box>
        </Grid>
        <Grid xs={7}>
          <Title>The Banshees of Inisherin</Title>
          <div className="des-movie">
            <span className="bold-css">Release Date:</span> October 21, 2022
          </div>
          <div className="des-movie">
            <span className="bold-css">Genre:</span> Drama
          </div>
          <div className="des-movie">
            Set on an island off the west coast of Ireland, The Banshees of
            Inisherin follows two lifelong friends, Pàdraic (Colin Farrell) and
            Colm (Brendan Gleeson), who find themselves at an impasse when Colm
            abruptly decides to end their friendship. With the support of his
            sister Siobhan (Kerry Condon), who along with the local policeman’s
            son Dominic (Barry Keoghan) has her own qualms within the small
            island community, a confused and devastated Pàdraic attempts to
            reignite their relationship. But when Colm delivers a shocking
            ultimatum in order to crystalize his intention, events start to
            escalate to fractious heights.
          </div>
          <div className="des-movie bold-css">Directed By</div>
          <div className="des2-movie">Martin McDonagh</div>
        </Grid>
      </Grid>
    </div>
  );
};

export default CardDetail;
