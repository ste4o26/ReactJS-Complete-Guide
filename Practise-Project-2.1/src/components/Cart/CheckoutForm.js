import React, { useContext } from 'react';

import CartContext from '../../store/cart-context';
import Input from '../UI/Input';
import useInput from '../../hooks/use-input';

import classes from './CheckoutForm.module.css';

const CheckoutForm = props => {
    const cartCtx = useContext(CartContext);

    const validateName = name => name.trim().length >= 5;
    const nameInput = useInput(validateName);

    const validatePostCode = postCode => postCode.trim().length >= 4;
    const postCodeInput = useInput(validatePostCode);

    const validateAddress = address => address.trim().length >= 10;
    const addressInput = useInput(validateAddress);

    const validateCity = city => city.trim().length >= 3;
    const cityInput = useInput(validateCity);

    const isFormValid = nameInput.isValid &&
        postCodeInput.isValid &&
        addressInput.isValid &&
        cityInput.isValid;

    const closeFormHandler = () => cartCtx.toggleCheckoutFormHandler();
    const submitHandler = e => {
        e.preventDefault();
        console.log(nameInput.value, postCodeInput.value, addressInput.value, cityInput.value);

        if (!isFormValid) return;

        nameInput.reset();
        postCodeInput.reset();
        addressInput.reset();
        cityInput.reset();

        props.onOrder({
            name: nameInput.value,
            postCode: postCodeInput.value,
            address: addressInput.value,
            city: cityInput.value
        });
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                label='Name: '
                input={{
                    type: 'text',
                    id: 'name',
                    value: nameInput.value,
                    error: nameInput.hasError.toString(),
                    onChange: nameInput.setValue,
                    onBlur: nameInput.focus
                }} />

            <Input
                label='Postal code: '
                input={{
                    type: 'text',
                    id: 'postCode',
                    value: postCodeInput.value,
                    error: postCodeInput.hasError.toString(),
                    onChange: postCodeInput.setValue,
                    onBlur: postCodeInput.focus
                }} />

            <Input
                label='Address: '
                input={{
                    type: 'text',
                    id: 'address',
                    value: addressInput.value,
                    error: addressInput.hasError.toString(),
                    onChange: addressInput.setValue,
                    onBlur: addressInput.focus
                }} />

            <Input
                label='City: '
                input={{
                    type: 'text',
                    id: 'city',
                    value: cityInput.value,
                    error: cityInput.hasError.toString(),
                    onChange: cityInput.setValue,
                    onBlur: cityInput.focus
                }} />

            <div className={classes.actions}>
                <button onClick={closeFormHandler} type='button'>Cancel</button>
                <button className={classes.submit} disabled={!isFormValid} type='submit'>Order</button>
            </div>
        </form>
    );
}

export default CheckoutForm;