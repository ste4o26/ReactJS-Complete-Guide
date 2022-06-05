import React from 'react';

const defaultCartContext = {
    items: [],
    totalAmount: 0,
    addItem: item => { },
    removeItem: id => { }
}

const CartContextProvider = React.createContext(defaultCartContext);

export default CartContextProvider;