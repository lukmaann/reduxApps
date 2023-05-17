import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice.js";

const store=configureStore({
    reducer:{
        cart:cartSlice
    }
    
})

export default store