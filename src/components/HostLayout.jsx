import { NavLink, Outlet } from "react-router-dom";

const HostLayout = () => {

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    const onActive = ({ isActive }) => {
        return isActive ? activeStyles : null
    }

    return (
        <>
            <nav className="host-nav">
                <NavLink style={onActive} end to=".">Dashboard</NavLink>
                <NavLink style={onActive} to="income">Income</NavLink>
                <NavLink style={onActive} to="vans">Vans</NavLink>
                <NavLink style={onActive} to="reviews">Reviews</NavLink>
            </nav>
            <Outlet />
        </>
    );
};

export default HostLayout;
