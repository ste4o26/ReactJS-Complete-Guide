import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    counter: 0,
    isHidden: false,
}

// react toolkit uses an internal package which detect code whis mutates the state directly 
// and so react toolkit make a copy and behid the scene and give it to us so we can 
// manipulate the copy of the state and not the actual state itself! 
const counterSlice = createSlice({
    name: 'counter',
    initialState: INITIAL_STATE,
    reducers: {
        increment(state) {
            state.counter++;
        },

        decrement(state) {
            state.counter--
        },

        increase(state, action) {
            state.counter = state.counter + action.payload.value;
        },

        toggle(state) {
            state.isHidden = !state.isHidden;
        }
    },
});

export const counterActions = counterSlice.actions;
export default counterSlice;