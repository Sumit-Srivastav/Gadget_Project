import { createSlice } from "@reduxjs/toolkit";
import { ToastContainer, toast } from "react-toastify";
const notify = () => {
  toast.success(`Add to Cart`, {
    position: "top-center",
    autoClose: 2000,
    style: {
      width: "200px", // Set the desired width here
    },
  });
}; 
// abcdef
const initialState = {
  cartContainer: JSON.parse(localStorage.getItem("cartContainer")) || [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      const presentItems = state.cartContainer.find(
        (items) => items.id === action.payload.id
      );
      if (presentItems) {
      } else {
        state.cartContainer.push(action.payload);
        localStorage.setItem(
          "cartContainer",
          JSON.stringify(state.cartContainer)
        );
        notify();
      }
    },
    removeCart: (state, action) => {
      state.cartContainer = state.cartContainer.filter(
        (items) => items.id !== action.payload
      );
      localStorage.setItem(
        "cartContainer",
        JSON.stringify(state.cartContainer)
      );
    },
    emptyCart: (state) => {
      state.cartContainer = [];
      localStorage.setItem("cartContainer", JSON.stringify(state.cartContainer));
    },
  },
});
export const { addCart, removeCart,emptyCart} = cartSlice.actions;
export default cartSlice.reducer;
