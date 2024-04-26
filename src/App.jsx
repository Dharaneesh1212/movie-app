import AuthContainer from "./components/auth";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Popular from "./components/popular";
import Search from "./components/search";
import Trending from "./components/trending";
import Watched from "./components/watched";
import Wishlist from "./components/wishlist";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <main>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/watched" element={<Watched />} />
          <Route path="/auth" element={<AuthContainer />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
