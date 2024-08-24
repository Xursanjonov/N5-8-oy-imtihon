import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: localStorage.getItem("exam-auth-token") || null,
    user: JSON.parse(localStorage.getItem("exam-user")) || null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
            localStorage.setItem("exam-auth-token", action.payload)
        },
        setUser: (state, action) => {
            state.user = action.payload;
            localStorage.setItem("exam-user", JSON.stringify(action.payload))
        },
        logout: (state) => {
            state.token = null;
            state.user = null;
            localStorage.removeItem("exam-auth-token")
            localStorage.removeItem("exam-user")
        },
    },
});

export const { logout, setToken, setUser } = authSlice.actions;
export default authSlice.reducer;