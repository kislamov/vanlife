export async function getVans(id=null) {

    const res = await fetch(`/api/vans/${id ? id : ""}`)
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}