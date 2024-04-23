import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { MovieContextProvider } from "./context/movie.context.jsx";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
    <MovieContextProvider>
      <App />
      <ToastContainer />
    </MovieContextProvider>
);
