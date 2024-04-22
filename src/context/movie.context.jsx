import { useState, createContext, useContext } from "react";

const MovieContext = createContext();

const MovieContextProvider = ({children}) => {

    const [add, setAdd] = useState()

    const addWatched=()=>{
        
    };
    const addWishlist=()=>{

    };
    const removeMovies=()=>{

    };

    const values = {
        addWatched,
        addWishlist,
        removeMovies
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
