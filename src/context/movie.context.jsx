import { useState, createContext, useContext } from "react";

const MovieContext = createContext();

const MovieContextProvider = ({children}) => {

    const [add, setAdd] = useState()

    return ( 
        <MovieContext.Provider>
            {children}
        </MovieContext.Provider>
     );
}


const usemovie = () => {
  return useContext(MovieContext);
};

export { MovieContextProvider, usemovie };