import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "./features/blogSlice";


// Create store for initialize the each
// slice I created
export const store = configureStore({
  reducer: {
    blogs: blogSlice
  }
})