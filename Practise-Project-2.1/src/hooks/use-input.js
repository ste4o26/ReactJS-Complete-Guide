import { useState } from 'react';

const useInput = (validateCallback) => {
    const [value, setValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const isValid = validateCallback(value);
    const hasError = !isValid && isFocused;


    const changeValueHandler = event => setValue(event.target.value);
    const focusHandler = () => setIsFocused(true);
    const reset = () => {
        setValue('');
        setIsFocused(false);
    }

    return {
        value,
        isValid,
        hasError,
        setValue: changeValueHandler,
        focus: focusHandler,
        reset
    }
}

export default useInput;