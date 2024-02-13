import { createSlice } from "@reduxjs/toolkit";
const shopColor = localStorage.getItem("shopColor")
  ? localStorage.getItem("shopColor")
  : "#eeb013";

const colorInLocalStorage = (data) => {
  localStorage.setItem("shopColor", data);
};

export const colorSlice = createSlice({
  name: "colorSlice",
  initialState: shopColor,
  reducers: {
    setColor: (state, action) => {
      state = action.payload;
      colorInLocalStorage(state);
      return state;
    },
  },
});

export const { setColor } = colorSlice.actions;
export default colorSlice.reducer;
