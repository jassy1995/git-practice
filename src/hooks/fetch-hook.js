import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [data, setDate] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();
        setTimeout(() => {
            fetch(url, { signal: abortCont.signal }).then((res) => {
                if (!res.ok) { throw Error('couldn\'t fetch data for ' + url) }
                else return res.json()
            }).then((data) => {
                setDate(data);
                setIsPending(false);
                setError(null);
            }).catch((err) => {
                if (err.name === 'AbortError') {
                    console.log('hi')
                } else {
                    setError(err?.message || "internal server error");
                    setIsPending(false)
                }

            })

        }, 1000)

        return () => abortCont.abort();

    }, [url])

    return { data, isPending, error, }

}