const SEARCH_URl = "http://localhost:3030/movies";

export interface Movie {
  id: number;
  title: string;
  hit: boolean;
}

export async function getMovies(
  signal: AbortSignal,
  searchValue: string,
  setMovies: (movies: Movie[]) => void,
) {
  let movies: Movie[] = [];

  try {
    let url = SEARCH_URl;
    if (searchValue) url += "?search=" + searchValue;
    const json = await fetch(url, { signal });
    movies = await json.json();
    setMovies(movies);
  } catch (err) {
    console.log(err);

    if (err instanceof TypeError) {
      console.error("Server is not running or unreachable");
      return;
    }

    console.error("Unknown error while fetching data");
  }
}
