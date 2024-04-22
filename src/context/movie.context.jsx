import { useState, createContext, useContext } from "react";

const MovieContext = createContext();

const MovieContextProvider = ({ children }) => {
  const [add, setAdd] = useState();
};

const usemovie = () => {
    return useContext(MovieContext)
};

export { MovieContextProvider, usemovie };
