import { useState, useEffect } from "react";
import Carousels from "./carousel";

const Popular = () => {
  const [popular, setPopular] = useState();
  const url = "";

  const getData = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setPopular(data);
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
      <div></div>
    </main>
  );
};

export default Popular;
