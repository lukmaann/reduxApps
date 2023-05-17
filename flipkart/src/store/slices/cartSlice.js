/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";


const cartSlice=createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addItem:(state,action)=>[...state,action.payload],
        removeItem:(state,action)=>{
         state.splice(action.payload,1)
        }
        
    }
   
})

export const {addItem,removeItem}=cartSlice.actions;
export default cartSlice.reducer;