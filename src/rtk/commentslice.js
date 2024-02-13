import { createSlice } from "@reduxjs/toolkit";

const shopcomment = localStorage.getItem("shopcomment")
  ? JSON.parse(localStorage.getItem("shopcomment"))
  : [];

const CommentsInLocalStorage = (data) => {
  localStorage.setItem("shopcomment", JSON.stringify(data));
};

export const commentSlice = createSlice({
  name: "commentSlice",
  initialState: shopcomment,
  reducers: {
    addToComments: (state, action) => {
      state.push(action.payload);
      CommentsInLocalStorage(state);
    },

    removeFromComments: (state, action) => {
      state = state.filter((item) => item.id !== action.payload.id);
      CommentsInLocalStorage(state);
      return state;
    },
  },
});

export const { addToComments, removeFromComments } = commentSlice.actions;
export default commentSlice.reducer;
