import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <main>
            <Link to="/">Home</Link>
            <Link to="/watched">Watched</Link>
            <Link to="/wishlist">Wishlist</Link>
            <Link to="/auth">Signup</Link>
        </main>
     );
}
 
export default Navbar;