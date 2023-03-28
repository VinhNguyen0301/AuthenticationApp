import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const FilterMovie = (props) => {
  const [genre, setGenre] = useState("");
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setGenre(event.target.value);
    props.filter(event.target.value);
  };
  console.log("genter", genre);

  const filterByGenre = async () => {
    // setLoading(true);
    // setErrorMessage(null);
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=81f52e2b2c22f5da99b338a684f8f443"
      );
      if (!response.ok) {
        throw new Error("Something went wrong !!!");
      }

      const filterData = await response.json();
      setValue(filterData);
    } catch (error) {}
  };
  useEffect(() => {
    filterByGenre();
  }, []);
  console.log("value", value);

  return (
    <Box sx={{ minWidth: 200 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Genre Filter</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={genre}
          label="Genre Filter"
          onChange={handleChange}
        >
          {value?.genres?.map((data) => (
            <MenuItem key={data.id} value={data.id}>
              {data.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default FilterMovie;
