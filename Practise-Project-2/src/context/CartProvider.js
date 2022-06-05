import React, { useReducer } from 'react';

import CartContext from './cart-context';

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const addToCart = (item, cart) => {
    const index = cart.items.findIndex(currentItem => currentItem.id === item.id);
    if (index < 0) {
        cart.items = cart.items.concat(item);
        cart.totalAmount += +(item.price * item.quantity).toFixed(2);
        return cart;
    }

    cart.items[index].quantity += 1;
    cart.totalAmount += +item.price.toFixed(2);

    return { ...cart };
}

const removeFromCart = (id, cart) => {
    const index = cart.items.findIndex(item => item.id === id);
    if (index < 0) return cart;

    const itemQuantity = cart.items[index].quantity;
    const currentMealPrice = +(cart.items[index].price.toFixed(2));
    if (itemQuantity > 1) {
        cart.items[index].quantity--;
        cart.totalAmount -= +(currentMealPrice.toFixed(2));
        return cart;
    }

    cart.items.splice(index, 1);
    cart.totalAmount -= currentMealPrice;
    return { ...cart };
}

const cartReducer = (cart, action) => {
    const updatedCart = { ...cart }
    switch (action.type) {
        case 'ADD':
            addToCart({ ...action.item }, updatedCart);
            break;

        case 'REMOVE':
            removeFromCart(action.id, updatedCart);
            break;
    }

    return updatedCart;
}

const CartProvider = props => {
    const [cart, cartDispatcher] = useReducer(cartReducer, defaultCartState);
    const addItemHandler = item => cartDispatcher({ type: 'ADD', item: item });
    const removeItemHandler = id => cartDispatcher({ type: 'REMOVE', id: id })

    const cartContext = {
        items: cart.items,
        totalAmount: +cart.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartProvider;