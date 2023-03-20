import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

const VanDetail = () => {
    const [van, setVan] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        const getVan = async () => {
            const res = await fetch(`/api/vans/${id}`)
            const data = await res.json()
            setVan(data.vans)
        }

        getVan()
    }, [id])

    return (
        <div className="van-detail-container">
            {van ? (
                <div className="van-detail">
                    <img src={van.imageUrl} />
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                    <h2>{van.name}</h2>
                    <p className="van-price"><span>${van.price}</span>/day</p>
                    <p>{van.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    );
};

export default VanDetail;
