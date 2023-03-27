import React from "react";
import { Stack } from "@mui/material";
import CardMovie from "./CardMovie";

const ListMovie = () => {
  return (
    <>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <CardMovie />
        <CardMovie />
        <CardMovie />
        <CardMovie />
        <CardMovie />
      </Stack>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <CardMovie />
        <CardMovie />
        <CardMovie />
        <CardMovie />
        <CardMovie />
      </Stack>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <CardMovie />
        <CardMovie />
        <CardMovie />
        <CardMovie />
        <CardMovie />
      </Stack>
    </>
  );
};

export default ListMovie;
