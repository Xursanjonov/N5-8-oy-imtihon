import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import authSlice from "./slices/authSlice";
import wishlistSlice from "./slices/wishListSlice";
import cartSlice from "./slices/cartSlice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        wishlist: wishlistSlice,
        cart: cartSlice,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});

export default store