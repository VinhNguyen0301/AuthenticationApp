import React, { useState, useEffect, useCallback } from "react";

import PageContent from "../components/PageContent";
import MoviesList from "../components/MoviesList";
import "./Home.css";

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(null);

  const fetchDataHandler = useCallback(async () => {
    setIsloading(true);
    setError(null);
    try {
      const response = await fetch("https://swapi.dev/api/films/");
      if (!response.ok) {
        throw new Error("Something went wrong !!!");
      }
      const data = await response.json();

      const tranformData = data?.results?.map((d) => {
        return {
          id: d.episode_id,
          title: d.title,
          openingText: d.opening_crawl,
          releaseDate: d.release_date,
        };
      });
      console.log("tranformData", tranformData);
      setMovies(tranformData);
    } catch (error) {
      setError(error.message);
    }
    setIsloading(false);

    // .catch((err) => console.log("err", err));
  }, []);

  useEffect(() => {
    fetchDataHandler();
  }, [fetchDataHandler]);

  let content = <p> No found Movies ... </p>;
  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (isLoading) {
    content = <p>Loading ...</p>;
  }

  return (
    <PageContent title="Welcome!">
      <section>
        <button onClick={fetchDataHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </PageContent>
  );
}

export default HomePage;
