import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    isOpen: false,
    notification: null
}

const uiSlice = createSlice({
    name: 'ui',
    initialState: INITIAL_STATE,
    reducers: {
        toggle(state) {
            state.isOpen = !state.isOpen;
        },

        showNotification(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message,
            }
        }
    }
});

export const uiActions = uiSlice.actions;
export default uiSlice;