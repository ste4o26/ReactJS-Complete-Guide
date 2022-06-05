import React, { useContext } from 'react';

import MealForm from './MealForm';
import CartContext from '../../context/cart-context';

import classes from './Meal.module.css';

const Meal = props => {
    const cartContext = useContext(CartContext);
    const addToCartHandler = (mealQuantity) => {
        const meal = { ...props.meal, price: +props.meal.price.toFixed(2), quantity: mealQuantity }
        cartContext.addItem(meal);
    }

    return (
        <li>
            <div className={classes.meal}>
                <h3>{props.meal.title}</h3>
                <div className={classes.description}>{props.meal.description}</div>
                <div className={classes.price}>{props.meal.price}</div>
            </div>

            <div>
                <MealForm onAddToCart={addToCartHandler} />
            </div>
        </li>
    );
}

export default Meal;