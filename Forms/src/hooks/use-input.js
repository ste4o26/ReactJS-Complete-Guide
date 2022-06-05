import { useState } from 'react';

const useInput = validateValue => {
    const [value, setValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const isValid = validateValue(value);
    const hasError = !isValid && isTouched;

    const changeValueHandler = event => setValue(event.target.value);
    const focusHandler = () => setIsTouched(true);

    const reset = () => {
        setValue('');
        setIsTouched(false);
    }

    return {
        value,
        isTouched,
        isValid,
        hasError,
        changeValueHandler,
        focusHandler,
        reset
    }
}

export default useInput;