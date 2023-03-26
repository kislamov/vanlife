import {Link, useParams, useLocation, useLoaderData} from "react-router-dom";
import {useEffect, useState} from "react";
import {getVans} from "../../api";
import {requireAuth} from "../../utils";

export const loader = async ({ params }) => {
    return await getVans(params.id)
}

const VanDetail = () => {
    const van = useLoaderData()
    const location = useLocation()

    const backBtn = location.state?.search || ""
    const type = location.state?.type || "all"

    return (
        <div className="van-detail-container">
            <Link
                to={`..${backBtn}`}
                relative="path"
                className="back-button"
            >&larr; <span>Back to {type} vans</span></Link>
            <div className="van-detail">
                <img src={van.imageUrl}/>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
                <h2>{van.name}</h2>
                <p className="van-price"><span>${van.price}</span>/day</p>
                <p>{van.description}</p>
                <button className="link-button">Rent this van</button>
            </div>
        </div>
    );
};

export default VanDetail;
