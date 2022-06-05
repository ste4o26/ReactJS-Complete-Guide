import React, { useContext, useEffect, useState } from 'react';

import CartIcon from '../cart/CartIcon';
import CartContext from '../../context/cart-context';

import classes from './CartButton.module.css';

const CartButton = props => {
    const cartContext = useContext(CartContext);
    const totalItemsCount = cartContext.items.reduce((acc, item) => acc + item.quantity, 0);
    const [isBtnHighlight, setIsBtnHighlight] = useState(false);

    const btnClasses = `${classes.button} ${isBtnHighlight ? classes.bump : ''}`;
    useEffect(() => {
        if (totalItemsCount <= 0) return;

        setIsBtnHighlight(true);
        const timeout = setTimeout(() => {
            setIsBtnHighlight(false);
        }, 500);

        return () => clearTimeout(timeout);
    }, [totalItemsCount]);


    return (
        <button onClick={props.onClick} className={btnClasses}>
            <span className={classes.icon}><CartIcon /></span>
            <span>Cart</span>
            <span className={classes.badge}>{totalItemsCount}</span>
        </button>
    );
}

export default CartButton;