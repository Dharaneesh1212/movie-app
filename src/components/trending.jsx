import { useState, useEffect } from "react";
import Carousels from "./carousel";

const Trending = () => {
  const [trending, setTrending] = useState();
  const url = "";

  const getData = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setTrending(data);
      console.log(data);
    } catch (error) {
      console.log("something went wrong", error);
    }

    useEffect(() => {
      getData();
    }, []);
  };
  return (
    <main>
      <Carousels />
      <h1>trending</h1>
    </main>
  );
};

export default Trending;
