import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productSlice from "./ProductSlice";
import commentSlice from "./commentslice";
import darkModeSlice from "./darkModeSlice";
import colorSlice from "./colorSlice";

export const store = configureStore({
  reducer: {
    product: productSlice,
    cart: cartSlice,
    comment: commentSlice,
    dark: darkModeSlice,
    color: colorSlice,
  },
});
