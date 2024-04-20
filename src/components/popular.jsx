import { useState, useEffect } from "react";
import Carousels from "./carousel";

const Popular = () => {
  // const [popular, setPopular] = useState();
  const url =
    "https://api.themoviedb.org/3/movie/popular?language=en-US&api_key=defd1902b4bb27bf2f154e42743a5266&page=1";

  const getData = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      // setPopular(data);
      console.log(data);
    } catch (error) {
      console.log("something went wrong", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <main>
      <Carousels />
      <div></div>
    </main>
  );
};

export default Popular;
