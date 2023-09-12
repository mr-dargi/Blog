import { createSlice } from "@reduxjs/toolkit";


// Create blogSlice.js for saving the data that
// we fetch from Api in Posts.js here so we can
// use it in another component

const initialState = {
  items: []
};

export const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.items = action.payload
    }
  }
})

export const { setData } = blogSlice.actions;
export default blogSlice.reducer;