import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./productSlice";

export const movieStore = configureStore({
  reducer: {
    productApp: ProductSlice,
  },
});
