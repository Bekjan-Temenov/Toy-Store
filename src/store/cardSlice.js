import { createSlice } from "@reduxjs/toolkit";

const cardSlice=createSlice({
    name:'card',
    initialState:{
        itemCard:[],

    },
    reducers:{
        setItem:(state,action) =>{
            state.itemCard.push(action.payload)
        }
    }
})

export const {setItem } =cardSlice.actions
export const cardReducer=cardSlice.reducer