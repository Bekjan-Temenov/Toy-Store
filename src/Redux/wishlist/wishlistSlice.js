import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name:"wishlist",
    initialState:{
        wishlists:[]
    },
    reducers:{
        addWishlist:(state , action ) => {
            const id = action.payload.id;
            const findProduct = state.wishlists.find((x) => x.id === id)
            if (findProduct){
                findProduct.quantity++;
            }else{
                state.wishlists.push({...action.payload , quantity : 1})
            }
        }
    }
})
export const {addWishlist} = wishlistSlice.actions;
export default wishlistSlice.reducer