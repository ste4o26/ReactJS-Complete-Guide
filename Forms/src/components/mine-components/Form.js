import React from 'react';
import Input from './Input'
import useInput from '../../hooks/use-input';

const Form = () => {
    const validateName = name => name.trim().length >= 6;
    const validateEmail = email => email.trim().includes('@') && email.trim().includes('.');

    const firstNameInput = useInput(validateName);
    const lastNameInput = useInput(validateName);
    const emailInput = useInput(validateEmail);

    const isValidForm = firstNameInput.isValid &&
        lastNameInput.isValid &&
        emailInput.isValid;

    const submitHandler = e => {
        e.preventDefault();
        if (!isValidForm) return;

        console.log(`I am ${firstNameInput.value} ${lastNameInput.value} and my email is ${emailInput.value}`);

        firstNameInput.reset();
        lastNameInput.reset();
        emailInput.reset();

    }

    return (
        <form onSubmit={submitHandler}>
            <Input
                id='firstName'
                type='text'
                label='First Name'
                hasError={firstNameInput.hasError}
                errorMessage='First name must be at least 6 characters long!'
                value={firstNameInput.value}
                onChange={firstNameInput.changeValueHandler}
                onBlur={firstNameInput.focusHandler}
            />

            <Input
                id='lastName'
                type='text'
                label='Last Name'
                hasError={lastNameInput.hasError}
                errorMessage='Last name must be at least 6 characters long!'
                value={lastNameInput.value}
                onChange={lastNameInput.changeValueHandler}
                onBlur={lastNameInput.focusHandler}
            />

            <Input
                id='email'
                type='email'
                label='Email'
                hasError={emailInput.hasError}
                errorMessage='Email must contains `@` and `.`!'
                value={emailInput.value}
                onChange={emailInput.changeValueHandler}
                onBlur={emailInput.focusHandler}
            />

            <div className="form-actions">
                <button disabled={!isValidForm}>Submit</button>
            </div>
        </form>);
}

export default Form;