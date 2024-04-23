import { useState, createContext, useContext } from "react";
// toast message
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MovieContext = createContext();

const MovieContextProvider = ({ children }) => {
  const [watch, setWatch] = useState([]);
  const [wish, setWish] = useState([]);

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
  const removeWatch = (movie) => {
    try {
      const removed = watch.filter((r) => r.id !== movie.id);
      if (removed.length < watch.length) {
        setWatch(removed);
        toast.success("Movie removed successfully");
      } else {
        throw new Error("Movie not found in wishlist");
      }
    } catch (error) {
      toast.error("There was an error removing the movie: " + error.message);
    }
  };

  const removeWish = (movie) => {
    try {
      const removed = wish.filter((r) => r.id !== movie.id);
      if (removed.length < wish.length) {
        setWish(removed);
        toast.success("Movie removed successfully");
      } else {
        throw new Error("Movie not found in wishlist");
      }
    } catch (error) {
      toast.error("There was an error removing the movie: " + error.message);
    }
  };

  const values = {
    watch,
    wish,
    addWatched,
    addWishlist,
    removeWatch,
    removeWish,
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
