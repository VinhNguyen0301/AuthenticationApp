import { Suspense, useState } from "react";
import { useLoaderData, json, defer, Await } from "react-router-dom";

import SearchMovie from "../components/SearchMovie";
import ListMovie from "../components/MUI/ListMovie";
import { Stack, useMediaQuery } from "@mui/material";
import FilterMovie from "../components/MUI/FilterMovie";
import "../index.css";

function MoviesPage() {
  const { movies } = useLoaderData();
  const [moviesList, setMoviesList] = useState(movies);
  const matches = useMediaQuery("(min-width:1269px)");
  const mobileScreen = useMediaQuery("(min-width:600px)");

  const search = async (searchValue) => {
    // setLoading(true);
    // setErrorMessage(null);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=81f52e2b2c22f5da99b338a684f8f443&query=${searchValue}`
      );
      if (!response.ok) {
        throw new Error("Something went wrong !!!");
      }

      const searchData = await response.json();
      console.log("searchData", searchData);

      const tranformData = searchData?.results?.map((d) => {
        return {
          id: d.id,
          title: d.title,
          openingText: d.overview,
          releaseDate: d.release_date,
          poster: d.poster_path,
        };
      });
      setMoviesList(tranformData);
    } catch (error) {}
  };
  const searchByGenre = async (filterValue) => {
    // setLoading(true);
    // setErrorMessage(null);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=81f52e2b2c22f5da99b338a684f8f443&with_genres=${filterValue}`
      );
      if (!response.ok) {
        throw new Error("Something went wrong !!!");
      }

      const searchData = await response.json();
      console.log("searchData", searchData);

      const tranformData = searchData?.results?.map((d) => {
        return {
          id: d.id,
          title: d.title,
          openingText: d.overview,
          releaseDate: d.release_date,
          poster: d.poster_path,
        };
      });
      setMoviesList(tranformData);
    } catch (error) {}
  };

  return (
    <div>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        {mobileScreen && (
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={matches ? "58%" : "20%"}
          >
            <div>
              <SearchMovie search={search} />
            </div>
            <div>
              <FilterMovie filter={searchByGenre} />
            </div>
          </Stack>
        )}

        <Await resolve={moviesList}>
          {/* {(loadedEvents) => <MovieList movies={loadedEvents} />} */}
          {(loadedEvents) => <ListMovie movies={loadedEvents} />}
        </Await>
      </Suspense>
    </div>
  );
}

export default MoviesPage;

async function loadEvents() {
  //API load discovery list movie
  const response = await fetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=81f52e2b2c22f5da99b338a684f8f443"
  );

  if (!response.ok) {
    throw json(
      { message: "Could not fetch events." },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    const tranformData = resData?.results?.map((d) => {
      return {
        id: d.id,
        title: d.title,
        openingText: d.overview,
        releaseDate: d.release_date,
        poster: d.poster_path,
      };
    });

    return tranformData;
  }
}

export function loader() {
  return defer({
    movies: loadEvents(),
  });
}
