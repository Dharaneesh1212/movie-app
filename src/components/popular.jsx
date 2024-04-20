import { useState, useEffect } from "react";
import Carousels from "./carousel";

const Popular = () => {
  const [popular, setPopular] = useState([]);
  const url =
    "https://api.themoviedb.org/3/movie/popular?language=en-US&api_key=defd1902b4bb27bf2f154e42743a5266&page=1";

  const getData = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setPopular(data.results);
      console.log(data.results);
    } catch (error) {
      console.log("something went wrong", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <main className="w-full">
    <Carousels />
      <h1 className="flex items-center justify-center m-4 text-2xl font-bold font-serif">POPULAR MOVIES</h1>
    <div className="flex items-center justify-center flex-wrap">
      {popular.map((movie) => (
        <main
          key={movie.id}
          className="flex items-center justify-center flex-col h-[31rem] w-[25rem] gap-4 rounded-xl shadow-[0_5px_15px_rgba(0,0,0,0.35)] m-6"
        >
          <div>
            <img
              className="h-[18rem] w-[15rem]"
              src={movie.poster_path}
              alt="movie-img"
            />
          </div>
          <div className="flex items-center justify-center flex-col gap-1">
            <h1 className="flex items-center justify-center text-xl font-bold">
              Title : {movie.title.slice(0, 20)}
            </h1>
            <span className="flex items-center justify-center font-semibold text-xl">
              Language : {movie.original_language}
            </span>
            <p className="text-lg flex items-center justify-center">
              Description : {movie.overview.slice(0, 30)}
            </p>
          </div>
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

export default Popular;
