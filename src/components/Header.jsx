import {Link, NavLink} from "react-router-dom";
import imageUrl from "../assets/images/avatar-icon.png"

const Header = () => {

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    const onActive = ({ isActive }) => {
        return isActive ? activeStyles : null
    }

    function fakeLogOut() {
        localStorage.removeItem("loggedin")
    }

    return (
        <header>
                <Link className="site-logo" to="/">#VanLife</Link>
                <nav>
                    <NavLink style={onActive} to="/host">Host</NavLink>
                    <NavLink style={onActive} to="/about">About</NavLink>
                    <NavLink style={onActive} to="/vans">Vans</NavLink>
                    <Link to="login" className="login-link">
                        <img
                            src={imageUrl}
                            className="login-icon"
                        />
                    </Link>
                    <button onClick={fakeLogOut}>X</button>
                </nav>
        </header>
    );
};

export default Header;
