import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <main className="">
      <div className="navbar bg-black flex items-center justify-around h-20 font-semibold text-2xl text-white">
        <Link to="/" className="flex justify-center items-center gap-2">
          <FaHome />
          Home
        </Link>
        <Link to="/watched" className="flex justify-center items-center gap-2">
          <FaCircleCheck />
          Watched
        </Link>
        <Link to="/wishlist" className="flex justify-center items-center gap-2">
          <FaHeart />
          Wishlists
        </Link>
        <Link to="/auth" className="flex justify-center items-center gap-2">
          <FaUser />
          Signup
        </Link>
      </div>
    </main>
  );
};

export default Navbar;
