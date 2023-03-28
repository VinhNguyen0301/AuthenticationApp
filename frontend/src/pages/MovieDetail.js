import { Suspense } from "react";
import {
  useRouteLoaderData,
  json,
  redirect,
  defer,
  Await,
} from "react-router-dom";

import { getAuthToken } from "../util/auth";
import CardDetail from "../components/MUI/CardDetail";
import RecommendedMovie from "../components/MUI/RecommendedMovie";

function MovieDetailPage() {
  const { movie, movies } = useRouteLoaderData("movie-detail");

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={movie}>
          {(loadedEvent) => <CardDetail movie={loadedEvent} />}
        </Await>
      </Suspense>
      <h2 style={{ marginLeft: "20px" }}>Recommend movie</h2>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={movies}>
          {(loadedEvents) => <RecommendedMovie movies={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
}

export default MovieDetailPage;

async function loadEvent(id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=81f52e2b2c22f5da99b338a684f8f443`
  );

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event." },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData;
  }
}

async function loadEvents(id) {
  //API recomment movie
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=81f52e2b2c22f5da99b338a684f8f443`
  );

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

    return resData;
  }
}

export async function loader({ request, params }) {
  const id = params.movieId;

  return defer({
    movie: await loadEvent(id),
    movies: await loadEvents(id),
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
