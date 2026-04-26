import { useEffect, useRef, useState } from "react";
import { getMovies } from "./api";
import { type Movie } from "./api";

import "./styles.css";

export default function SearchInput(): React.ReactElement {
  const [movies, setMovies] = useState<Movie[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    generateMovies();
  }, []);
  let controller: AbortController;

  function generateMovies() {
    if (controller) controller.abort();
    controller = new AbortController();
    const signal = controller.signal;
    const search = inputRef?.current?.value || "";
    getMovies(signal, search, setMovies);
  }

  return (
    <div className="wrapper">
      <input
        type="text"
        className="search-input"
        ref={inputRef}
        onChange={generateMovies}
      />

      {movies && (
        <div className="movies-list">
          {movies.map((movie) => (
            <div key={movie.id}>{movie.title}</div>
          ))}
        </div>
      )}
    </div>
  );
}
