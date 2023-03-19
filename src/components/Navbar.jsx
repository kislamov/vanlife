import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="navbar">
            <Link to="/" className="navbar-logo">#VANLIFE</Link>
            <ul className="navbar-links">
                <li className="navbar-link"><Link to="/about">About</Link></li>
            </ul>
        </header>
    );
};

export default Navbar;
