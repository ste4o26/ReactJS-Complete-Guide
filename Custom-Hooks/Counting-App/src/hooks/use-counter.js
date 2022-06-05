import { useState, useEffect } from 'react';

const useCounter = (counterStepCallback) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prevCounter) => counterStepCallback(prevCounter));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return counter;
}

export default useCounter;