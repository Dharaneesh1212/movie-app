import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";

const Search = () => {
  const [search, setSearch] = useState(false);
  const [movies, setMovies] = useState("");
  const [results, setResults] = useState([]);

  const key = "6f5918d3";
  const url = `http://www.omdbapi.com/?s=${movies}&apikey=${key}`;

  const fetchMovieDetails = async (imdbID) => {
    const detailUrl = `http://www.omdbapi.com/?i=${imdbID}&apikey=${key}`;
    try {
      const res = await fetch(detailUrl);
      const data = await res.json();
      return data;
    } catch (error) {
      console.error("Error fetching movie details:", error);
      return null;
    }
  };

  const getData = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.Response === "True") {
        const moviesWithDetails = await Promise.all(
          data.Search.map(async (movie) => {
            const details = await fetchMovieDetails(movie.imdbID);
            return { ...movie, ...details };
          })
        );
        setResults(moviesWithDetails);
      } else {
        setResults([]);
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
      setResults([]);
    }
  };

  // const getData = async () => {
  //   try {
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     if (data.Response === "True") {
  //       setResults(data.Search);
  //     } else {
  //       setResults([]);
  //     }
  //     console.log(data);
  //   } catch (error) {
  //     console.log("something went wrong", error);
  //   }
  // };

  useEffect(() => {
    if (movies) {
      getData();
    }
  }, [movies]);

  const handleChange = (e) => {
    setMovies(e.target.value);
  };

  const handleSearch = () => {
    setSearch(true);
    getData();
  };

  return (
    <main className="flex items-center justify-center flex-col">
      <h1 className="flex items-center justify-center m-4 text-2xl font-bold font-serif">
        SEARCH
      </h1>
      <div className="flex items-center justify-center">
        <input
          type="text"
          placeholder="Search for movie"
          value={movies}
          onChange={(e) => setMovies(e.target.value)}
          className="py-2 px-5 outline-none border-b-2 border-b-yellow-500 text-lg"
        />
        <button
          onClick={handleSearch}
          className="flex items-center justify-center px-3 py-3 bg-yellow-400 rounded-md"
        >
          <IoSearch />
        </button>
      </div>
      {search && results.length > 0 && (
        <div>
          {results.map((movie) => (
            <div
              key={movie.imdbID}
              className="flex items-center justify-evenly m-4 shadow-[0_5px_15px_rgba(0,0,0,0.35)] h-[32rem] w-[60rem] rounded-lg"
            >
              <main>
                <div className="flex items-center justify-evenly m-4">
                  <img
                    src={movie.Poster}
                    alt="movie_poster"
                    className="h-[25rem] w-[25rem]"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <button className="flex items-center justify-center gap-1 bg-red-600 text-xl text-white px-3 py-2 rounded-md">
                    Wishlist <FaHeart />
                  </button>
                </div>
              </main>
              <div className="flex items-start justify-evenly m-4 flex-col gap-4 w-[40rem]">
                <h1 className="flex items-center justify-center text-xl font-extrabold">
                  Title : {movie.Title}
                </h1>
                <span
                  key={movie.imdbID}
                  className="flex items-center justify-center font-medium text-xl"
                >
                  Language : {movie.Language}
                </span>
                <p
                  key={movie.imdbID}
                  className="text-xl flex items-center justify-center font-medium ml-1 mr-1"
                >
                  Story : {movie.Plot}
                </p>
                <span
                  key={movie.imdbID}
                  className="flex items-center justify-center font-medium text-xl"
                >
                  Genre : {movie.Genre}
                </span>
                <p
                  key={movie.imdbID}
                  className="flex items-center justify-center font-medium text-xl"
                >
                  Actors : {movie.Actors}
                </p>
                <span
                  key={movie.imdbID}
                  className="flex items-center justify-center text-lg font-medium"
                >
                  Released : {movie.Released}
                </span>
                <span
                  key={movie.imdbID}
                  className="flex items-center justify-center text-lg font-medium"
                >
                  Type : {movie.Type}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default Search;
