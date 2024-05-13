import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart/cartSlice";
import wishlistSlice from "./wishlist/wishlistSlice";
const store = configureStore({
    reducer: {
        cart: cartSlice,
        wishlists:wishlistSlice,
    },
});

export default store;