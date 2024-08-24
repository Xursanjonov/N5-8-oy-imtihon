import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: JSON.parse(localStorage.getItem("wish-list")) || [],
};

const wishlistSlice = createSlice({
    name: "heart",
    initialState,
    reducers: {
        toggleHeart: (state, action) => {
            let index = state.value.findIndex((i) => i._id === action.payload._id.toString());
            if (index < 0) {
                state.value = [...state.value, action.payload];
            } else {
                state.value = state.value.filter((i) => i._id !== action.payload._id);
                localStorage.setItem("wish-list", JSON.stringify(state.value));
            }
        }
    },
});

export const { addToHeart } = wishlistSlice.actions;
export default wishlistSlice.reducer;