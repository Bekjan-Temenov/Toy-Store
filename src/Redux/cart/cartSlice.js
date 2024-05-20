import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        carts: [],
        isLoading: false,
        error: ''
    },
    reducers: {
        addToCart(state, action) {
            const id = action.payload.id;
            const findProduct = state.carts.find((x) => x.id === id)
            if (findProduct) {
                findProduct.quantity++;
            } else {
                state.carts.push({ ...action.payload, quantity: 1 })
            }
        },
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const item = state.carts.find((x) => x.id === id)
            if (item) {
                item.quantity = quantity
            }

        }
    }
})
export const { addToCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;   