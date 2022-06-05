import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    isAuth: false,
    username: ''
}

const authSlice = createSlice({
    name: 'auth',
    initialState: INITIAL_STATE,
    reducers: {
        login(state, action) {
            state.isAuth = true;
            state.username = action.payload.username
        },

        logout(state) {
            state.isAuth = false;
            state.username = '';
        }
    }
});

export const authActions = authSlice.actions;
export default authSlice;