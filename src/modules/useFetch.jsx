import React, { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAPI = async () => {
            try {
                const resAPI = await fetch(url);
                const resData = await resAPI.json();

                if (!resAPI.ok)
                    throw new error("Access denied");
                
                setData(resData);
                setError(null);
            }
            catch (err) {
                setError(err.message);
            }
            finally {
                setLoading(false);
            }
        }

        fetchAPI();
    }, [url])

    return {data, loading, error};
}

export default useFetch