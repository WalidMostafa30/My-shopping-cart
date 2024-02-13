import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const shopCart = localStorage.getItem("shopCart")
  ? JSON.parse(localStorage.getItem("shopCart"))
  : [];

const storeInLocalStorage = (data) => {
  localStorage.setItem("shopCart", JSON.stringify(data));
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState: shopCart,
  reducers: {
    addToCart: (state, action) => {
      const findProduct = state.find((item) => item.id === action.payload.id);
      if (findProduct) {
        findProduct.quantity++;
      } else {
        const productclone = { ...action.payload, quantity: 1 };
        state.push(productclone);
      }
      storeInLocalStorage(state);
    },

    decressquantity: (state, action) => {
      const findProduct = state.find((item) => item.id === action.payload.id);
      if (findProduct) {
        if (findProduct.quantity > 1) {
          findProduct.quantity--;
        } else {
          state = state.filter((item) => item.id !== action.payload.id);
          storeInLocalStorage(state);
          toast.error("Product Deleted From Card 😥");
          return state;
        }
      }
      storeInLocalStorage(state);
    },

    removeFromCart: (state, action) => {
      state = state.filter((item) => item.id !== action.payload.id);
      storeInLocalStorage(state);
      return state;
    },

    clearCart: (state, action) => {
      state = [];
      storeInLocalStorage(state);
      return state;
    },
  },
});

export const { addToCart, removeFromCart, clearCart, decressquantity } =
  cartSlice.actions;
export default cartSlice.reducer;
