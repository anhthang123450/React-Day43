import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState({});

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((res) => setData(res))
            .catch((err) => setError(err))
            .finally(() => setIsLoading(false));
    }, [url]);

    return [data, isLoading, error];
};

export default useFetch;
