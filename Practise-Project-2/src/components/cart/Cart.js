import React, { useContext } from 'react';

import Modal from '../ui/Modal';
import CartContext from '../../context/cart-context';
import CartItem from './CartItem';

import classes from './Cart.module.css'

const Cart = props => {
    const cartContext = useContext(CartContext);
    const hasItems = cartContext.items.length > 0;

    const addItemHandler = item => cartContext.addItem(item);
    const removeItemHandler = id => cartContext.removeItem(id);

    const cartItems = (
        <ul>
            {
                cartContext
                    .items
                    .map(item => {
                        return <CartItem
                            key={item.id}
                            title={item.title}
                            price={+(item.price.toFixed(2))}
                            quantity={item.quantity}
                            onAdd={addItemHandler.bind(null, item)}
                            onRemove={removeItemHandler.bind(null, item.id)}
                        />
                    })
            }
        </ul>
    );

    return (
        <Modal onClick={props.onCloseCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{`£${cartContext.totalAmount.toFixed(2)}`}</span>
            </div>
            <div className={classes.actions}>
                <button onClick={props.onCloseCart} type='button' className={classes['button--alt']}>Close</button>
                {hasItems && <button type='button' className={classes.button}>Order</button>}
            </div>
        </Modal>
    );
}

export default Cart;