import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../featues/todo/todoSlice";

export const store = configureStore({
  reducer: todoReducer,
});
