import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <main className="flex items-center justify-center flex-col">
      <h1 className="flex items-center justify-center m-4 text-2xl font-bold font-serif">
        SEARCH
      </h1>
      <div className="flex items-center justify-center">
        <input
          type="text"
          placeholder="Search for movie"
          className="py-2 px-5 outline-none border-b-2 text-lg"
        />
        <button className="flex items-center justify-center px-3 py-3 bg-blue-500 rounded-md">
          <IoSearch />
        </button>
      </div>
    </main>
  );
};

export default Search;
