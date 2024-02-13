import { createSlice } from "@reduxjs/toolkit";
import { Data } from "../data/Data";

export const productSlice = createSlice({
  name: "productSlice",
  initialState: Data,
  reducers: {},
});

// export const { d } = productSlice.actions;
export default productSlice.reducer;
