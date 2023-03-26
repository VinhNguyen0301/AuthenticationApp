import { Suspense } from "react";
import {
  useRouteLoaderData,
  json,
  redirect,
  defer,
  Await,
} from "react-router-dom";

import MovieDetails from "../components/MovieDetails";
import MovieList from "../components/MoviesList";
import { getAuthToken } from "../util/auth";

function MovieDetailPage() {
  const { movie, movies } = useRouteLoaderData("movie-detail");
  console.log("movie hihi", movie);

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={movie}>
          {(loadedEvent) => <MovieDetails movie={loadedEvent} />}
        </Await>
      </Suspense>
      <p>Phan biet</p>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={movies}>
          {(loadedEvents) => <MovieList movies={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
}

export default MovieDetailPage;

async function loadEvent(id) {
  const response = await fetch("https://swapi.dev/api/films/" + id);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event." },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    console.log("res 13", resData);
    // const tranformData = resData?.filter((d) => {
    //   return {
    //     id: d.episode_id,
    //     title: d.title,
    //     openingText: d.opening_crawl,
    //     releaseDate: d.release_date,
    //   };
    // });
    // console.log("resData filter", resData);

    return resData;
  }
}

async function loadEvents() {
  const response = await fetch("https://swapi.dev/api/films/");

  if (!response.ok) {
    // return { isError: true, message: 'Could not fetch events.' };
    // throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), {
    //   status: 500,
    // });
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

export async function loader({ request, params }) {
  const id = params.movieId;

  return defer({
    movie: await loadEvent(id),
    movies: loadEvents(),
  });
}

export async function action({ params, request }) {
  const movieId = params.movieId;
  const token = getAuthToken();
  const response = await fetch("https://swapi.dev/api/films/" + movieId, {
    method: request.method,
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  if (!response.ok) {
    throw json(
      { message: "Could not delete event." },
      {
        status: 500,
      }
    );
  }
  return redirect("/movies");
}
