import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "../redux/Slices/cartSlice"
const Store =configureStore({
    reducer:{
cart:cartSliceReducer
    }
})
export default Store