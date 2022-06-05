import { useState, useCallback } from 'react';

const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendHttpRequest = useCallback(async (url, dataManipulationCallback, options = {}) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(url, {
                method: options.method ? options.method : 'GET',
                headers: options.headers ? options.headers : {},
                body: options.body ? JSON.stringify(options.body) : null
            });

            if (!response.ok) throw new Error('Request failed!');
            const data = await response.json();
            console.log(data)
            dataManipulationCallback(data);
        } catch (error) {
            setError(error.message);
        }

        setIsLoading(false);
    }, []);

    return {
        isLoading,
        error,
        sendHttpRequest
    };
}



export default useHttp;