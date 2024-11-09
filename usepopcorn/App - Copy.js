import { useState } from "react";
import Navbar from "./Components/Navbar";
import ListBox from "./Components/ListBox";
import WatchedList from "./Components/WatchedList";
import Box from "./Components/Box";
import MoviesList from "./Components/MoviesList";
import StarRating from "./Components/StarRating";

const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

export default function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState(tempMovieData);

  return (
    <>
      <Navbar query={query} setQuery={setQuery} moviesLength={movies.length} />

      <Main>
        <Box element={<MoviesList movies={movies} setMovies={setMovies} />} />
        <Box element={<WatchedList />} />
      </Main>

      <StarRating maxRating={"5"} />
    </>
  );
}

function Main({ children }) {
  return <main className="main">{children}</main>;
}
