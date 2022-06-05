import { createSlice } from '@reduxjs/toolkit';
import { uiActions } from './ui-slice';

const INITIAL_STATE = {
    items: [],
    totalAmount: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: INITIAL_STATE,
    reducers: {
        addItem(state, action) {
            const item = { ...action.payload, quantity: 1, total: action.payload.price };
            const index = state.items.findIndex(currentItem => currentItem.id === item.id);
            state.totalAmount += +item.price.toFixed(2);

            if (index === -1) {
                state.items = state.items.concat([item]);
                return;
            }

            state.items[index].quantity++;
            state.items[index].total += +item.price.toFixed(2);

        },

        removeItem(state, action) {
            const index = state.items.findIndex(currentItem => currentItem.id === action.payload.id);
            if (index === -1) return;

            state.totalAmount -= +state.items[index].price.toFixed(2);

            if (state.items[index].quantity <= 1) {
                state.items.splice(index, 1);
                if (state.items.length <= 0) { state.totalAmount = 0; }
                return;
            }

            state.items[index].quantity--;
            state.items[index].total -= +state.items[index].price.toFixed(2);
        },

        updateCart(state, action) {
            state.items = action.payload.items;
            state.totalAmount = action.payload.totalAmount;
        }
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice;