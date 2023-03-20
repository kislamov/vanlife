import {Link, NavLink} from "react-router-dom";

const Header = () => {

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    const onActive = ({ isActive }) => {
        return isActive ? activeStyles : null
    }

    return (
        <header>
                <Link className="site-logo" to="/">#VanLife</Link>
                <nav>
                    <NavLink style={onActive} to="/host">Host</NavLink>
                    <NavLink style={onActive} to="/about">About</NavLink>
                    <NavLink style={onActive} to="/vans">Vans</NavLink>
                </nav>
        </header>
    );
};

export default Header;
