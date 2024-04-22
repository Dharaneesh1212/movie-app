import { MdDelete } from "react-icons/md";
import { usemovie } from "../context/movie.context";

const Watched = () => {
  return (
    <main className="flex items-center justify-center flex-col m-4">
      <h1 className="flex items-center justify-center m-4 text-2xl font-bold font-serif">
        WATCHED
      </h1>
      <div className="flex items-center justify-center flex-row">
        <div className="flex items-center justify-center flex-col h-[22rem] w-[18rem] gap-2 rounded-xl shadow-[0_5px_15px_rgba(0,0,0,0.35)] m-6">
          <img src="" alt="" />
          <h1 className="flex items-center justify-center text-xl font-bold">
            Title :
          </h1>
          <span className="flex items-center justify-center font-semibold text-xl">
            Language :
          </span>
          <button className="flex items-center justify-center gap-1 bg-red-600 text-white px-3 py-2 rounded-md">
            <MdDelete />
          </button>
        </div>
      </div>
    </main>
  );
};

export default Watched;
