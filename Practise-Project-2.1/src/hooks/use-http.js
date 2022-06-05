import { useState, useCallback } from 'react';

const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = useCallback(async (dataModificationCallback, options = {}) => {
        setIsLoading(true);

        try {
            const res = await fetch(options.url, {
                method: options.method ? options.method.toUpperCase() : 'GET',
                headers: options.headers ? options.headers : {},
                body: options.body ? JSON.stringify(options.body) : null
            });
            if (!res.ok) throw new Error('Something went wrong!');

            const data = await res.json();
            dataModificationCallback(data);
        } catch (err) {
            setError(err.message);
        }

        setIsLoading(false);
    }, [])

    return {
        isLoading,
        error,
        sendRequest
    }
}

export default useHttp;