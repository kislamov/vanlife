import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {useEffect} from "react";


const AuthRequired = () => {
    const navigate = useNavigate()
    const isLoggedIn = localStorage.getItem("loggedin")
    const location = useLocation()
    const state = {
        message: "You need to be logged in first",
        from: location.pathname
    }

    useEffect(() => {
        if (!isLoggedIn) {
            navigate("login", { state: state, replace: true })
        }
    },[isLoggedIn])

    return (
        <>
            <Outlet />
        </>
    );
};

export default AuthRequired;
