import { useEffect, useState } from "react";

export function useFetchData(url) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true)
        fetch(url)
        .then((res) => res.json())
        .then((result) => {
            setData(result.users || result)
        })
        .catch((err) => {
            console.error(err);
        })
        .finally(() => {
            setLoading(false);
        });
    }, [url]);
    return { data, loading }
}