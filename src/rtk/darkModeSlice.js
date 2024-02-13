import { createSlice } from "@reduxjs/toolkit";
const shopDarkMode = localStorage.getItem("shopDarkMode")
  ? localStorage.getItem("shopDarkMode")
  : "light";

const darkInLocalStorage = (data) => {
  localStorage.setItem("shopDarkMode", data);
};

export const darkModeSlice = createSlice({
  name: "darkModeSlice",
  initialState: shopDarkMode,
  reducers: {
    setMode: (state, action) => {
      state = action.payload;
      darkInLocalStorage(state);
      return state;
    },
  },
});

export const { setMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
