import { useState, useEffect } from "react";
import Carousels from "./carousel";
import { FaCircleCheck } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";

const Trending = () => {
  const [trending, setTrending] = useState([]);
  const [page, setPage] = useState(1);
  const url =
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&api_key=defd1902b4bb27bf2f154e42743a5266&page=1";

  const getData = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setTrending((prev) => [...prev, ...data.results]);
      console.log(data.results);
    } catch (error) {
      console.log("something went wrong", error);
    }
  };

  useEffect(() => {
    getData();
  }, [page]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="w-full">
      <Carousels />
      <h1 className="flex items-center justify-center m-4 text-2xl font-bold font-serif">
        TRENDING MOVIES
      </h1>
      <div className="flex items-center justify-center flex-wrap">
        {trending.map((movie) => (
          <main
            key={movie.id}
            className="flex items-center justify-center flex-col h-[30rem] w-[38rem] gap-8 rounded-xl shadow-[0_5px_15px_rgba(0,0,0,0.35)] m-6"
          >
            <main className="flex items-center justify-center flex-row gap-4">
            <div>
              <img
                className="h-[18rem] w-[15rem]"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt="movie-img"
              />
            </div>
            <div className="flex items-start justify-center flex-col gap-2 w-[18rem]">
              <h1 className="flex items-center justify-center text-xl font-bold">
                Title : {movie.title.slice(0, 20)}
              </h1>
              <span className="flex items-center justify-center font-semibold text-xl">
                Language : {movie.original_language}
              </span>
              <p className="text-lg font-medium flex items-center justify-center ml-1 mr-1">
                Description : {movie.overview.slice(0,250)}
              </p>
              <p className="font-medium text-lg flex items-center justify-center ml-1 mr-1">
                Release date : {movie.release_date}
              </p>
            </div>
            </main>
            <div className="flex items-center justify-center gap-8 text-xl font-semibold">
              <button className="flex items-center justify-center gap-1 bg-green-600 text-white px-3 py-2 rounded-md">
                Watched <FaCircleCheck />
              </button>
              <button className="flex items-center justify-center gap-1 bg-red-600 text-white px-3 py-2 rounded-md">
                Wishlist <FaHeart />
              </button>
            </div>
          </main>
        ))}
      </div>
    </main>
  );
};

export default Trending;
