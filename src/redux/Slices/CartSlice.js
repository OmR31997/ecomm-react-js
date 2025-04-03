import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name: "cart",
    initialState:[],
    reducers:{
        add: (state, action) =>{
            const existingItem = state.find((item) => item.id === action.payload.id);
            if(!existingItem)
                state.push({...action.payload, quantity: 1})
        },

        remove: (state, action) =>{
            return state.filter((item) => item.id !== action.payload)
        },

        update: (state, action) =>{
            const index = state.findIndex((item) => item.id === action.payload);
            if(index !== -1)
                state[index] = {...state[index], ...action.payload.item}
        },

        incQty: (state, action) =>{
            const item = state.find((item) => item.id === action.payload);
            if(item)
            {
                item.quantity += 1;
            }
        },
        
        decQty: (state, action) =>{
            const item = state.find((item) => item.id === action.payload);
            if(item && item.quantity > 1)
                item.quantity -= 1;
        }
    }
});

export const {add, remove, update, incQty, decQty} = CartSlice.actions

export default CartSlice.reducer