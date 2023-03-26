import { Suspense } from "react";
import { useLoaderData, json, defer, Await } from "react-router-dom";

import MovieList from "../components/MoviesList";

function MoviesPage() {
  const { movies } = useLoaderData();
  console.log("movies", movies);
  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={movies}>
        {(loadedEvents) => <MovieList movies={loadedEvents} />}
      </Await>
    </Suspense>
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
