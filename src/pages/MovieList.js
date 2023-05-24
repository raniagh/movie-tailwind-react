import { useEffect, useState } from "react";
import { Card } from "../components/Card";

export const MovieList = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=d9963d58b139224e58065d3893c6a261"
      );
      const data = await response.json();
      setMovies(data.results);
    }
    fetchMovies();
  }, [movies]);
  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies &&
            movies.map((movie) => <Card key={movie.id} movie={movie} />)}
        </div>
      </section>
    </main>
  );
};
