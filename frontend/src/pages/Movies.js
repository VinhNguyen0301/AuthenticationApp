import { Suspense, useState } from "react";
import { useLoaderData, json, defer, Await } from "react-router-dom";

import MovieList from "../components/MoviesList";
import SearchMovie from "../components/SearchMovie";

function MoviesPage() {
  const { movies } = useLoaderData();
  console.log("movies", movies);
  const [moviesList, setMoviesList] = useState(movies);

  const search = async (searchValue) => {
    // setLoading(true);
    // setErrorMessage(null);
    try {
      const response = await fetch(
        `https://swapi.dev/api/films/?search=${searchValue}`
      );
      if (!response.ok) {
        throw new Error("Something went wrong !!!");
      }

      const searchData = await response.json();
      const tranformData = searchData?.results?.map((d) => {
        return {
          id: d.episode_id,
          title: d.title,
          openingText: d.opening_crawl,
          releaseDate: d.release_date,
        };
      });
      setMoviesList(tranformData);
      console.log("tranformData", tranformData);
    } catch (error) {}
  };

  return (
    <div>
      <SearchMovie search={search} />
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={moviesList}>
          {(loadedEvents) => <MovieList movies={loadedEvents} />}
        </Await>
      </Suspense>
    </div>
  );
}

export default MoviesPage;

async function loadEvents() {
  const response = await fetch("https://swapi.dev/api/films/");

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
        id: d.episode_id,
        title: d.title,
        openingText: d.opening_crawl,
        releaseDate: d.release_date,
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
