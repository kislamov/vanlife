import { redirect } from "react-router-dom";

export const requireAuth = async () => {
    const isLoggedIn = localStorage.getItem("loggedin")

    if (!isLoggedIn) {
        throw redirect("/login?message=What a heck")
    }

    return null
}