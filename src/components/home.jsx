import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import Carousels from "./carousel";

const Home = () => {
  return (
    <main className="flex flex-col gap-4">
      <Carousels />
      <div className="flex items-center justify-start font-semibold text-2xl gap-8 ml-4 mr-4 h-20">
        <Link to="/popular" className="flex justify-center items-center">
          Popular
        </Link>
        <Link to="/trending" className="flex justify-center items-center">
          Trending
        </Link>
        <Link to="/search" className="flex justify-center items-center">
          Search
          <IoSearch />
        </Link>
      </div>
    </main>
  );
};

export default Home;
