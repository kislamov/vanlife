import { Link, Outlet, NavLink, useLoaderData } from "react-router-dom"
import { getHostVans } from "../../api";
import {requireAuth} from "../../utils";

export const loader = async ({ params }) => {
    await requireAuth()
    return await getHostVans(params.id)
}

export default function HostVanDetail() {
    const currentVan = useLoaderData()

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    const onActive = ({ isActive }) => {
        return isActive ? activeStyles : null
    }

    return (
        <section>
            <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>
            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={currentVan.imageUrl}/>
                    <div className="host-van-detail-info-text">
                        <i
                            className={`van-type van-type-${currentVan.type}`}
                        >
                            {currentVan.type}
                        </i>
                        <h3>{currentVan.name}</h3>
                        <h4>${currentVan.price}/day</h4>
                    </div>
                </div>

                <nav className="host-van-detail-nav">
                    <NavLink
                        to="."
                        end
                        style={onActive}
                    >
                        Details
                    </NavLink>

                    <NavLink
                        to="pricing"
                        style={onActive}
                    >
                        Pricing
                    </NavLink>

                    <NavLink
                        to="photos"
                        style={onActive}
                    >
                        Photos
                    </NavLink>

                </nav>

                <Outlet context={{currentVan}} />
            </div>
        </section>
    )
}
