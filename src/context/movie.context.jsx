import { useState, createContext, useContext } from "react";

const MovieContext = createContext();

const MovieContextProvider = ({children}) => {

    const [watch, setWatch] = useState([])
    const [wish, setWish] = useState([])

    const addWatched=(movie)=>{
      setWatch([...watch, movie]);
    };
    const addWishlist=(movie)=>{
      setWish([...wish, movie]);
    };
    const removeMovie=()=>{

    };

    const values = {
        watch,
        wish,
        addWatched,
        addWishlist,
        removeMovie
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
