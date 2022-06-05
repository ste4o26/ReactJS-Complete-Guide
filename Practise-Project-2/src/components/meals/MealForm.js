import React, { useRef } from 'react';

import Input from '../ui/Input';

import classes from './MealForm.module.css';

const MealForm = props => {
    const quantityInputRef = useRef();

    const submitHandler = e => {
        e.preventDefault();
        props.onAddToCart(+quantityInputRef.current.value)
    }

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <Input
                ref={quantityInputRef}
                label='Amount'
                input={
                    {
                        id: 'amount',
                        type: 'number',
                        min: '1',
                        max: '5',
                        step: '1',
                        defaultValue: '1'
                    }
                }
            />
            <button>Add</button>
        </form>
    );
}

export default MealForm;