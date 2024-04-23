import { useState, createContext, useContext } from "react";
// toast message
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MovieContext = createContext();

const MovieContextProvider = ({ children }) => {
  const [watch, setWatch] = useState([]);
  const [wish, setWish] = useState([]);
  const [remove, setRemove] = useState([]);

  const addWatched = (movie) => {
    const isAlready = watch.some((m) => m.id === movie.id);
    if (isAlready) {
      toast.error("Movie already exists in the watched list!");
    } else {
      setWatch([...watch, movie]);
      toast.success("Movie added to watched successfully!");
    }
  };
  const addWishlist = (movie) => {
    const isAlready = wish.some((m) => m.id === movie.id);
    if (isAlready) {
      toast.error("Movie already exists in the wishlist!");
    } else {
      setWish([...wish, movie]);
      toast.success("Movie added to wishlist successfully!");
    }
  };
  const removeMovie = () => {

  };

  const values = {
    watch,
    wish,
    remove,
    addWatched,
    addWishlist,
    removeMovie,
  };
  return (
    <MovieContext.Provider value={values}>
      {children}
    </MovieContext.Provider>
  );
};

const usemovie = () => {
  return useContext(MovieContext);
};

export { MovieContextProvider, usemovie };
