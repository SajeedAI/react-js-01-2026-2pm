import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar() {

    return(
        <nav className="navbar">
            <h2 className="logo">Maie Academy</h2>

            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/classes">Classes</Link></li>
                <li><Link to="/navodaya">Navodaya</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;