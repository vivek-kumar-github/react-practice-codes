import { useEffect, useState } from "react";

export function useFetchData(url) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true)
        fetch(url)
            .then(Response => Response.json())
            .then(data => {
                setData(data)
            })
            .catch((ex) => {
                console.error(ex)
                setLoading(false)
            })
    }, [url])
    return { data, loading }
}