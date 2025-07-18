import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: JSON.parse(localStorage.getItem("theme")) ?? "white",
  movie: [],
  details: {},
  actor: [],
};
export const ProductSlice = createSlice({
  name: "PRODUCT",
  initialState,
  reducers: {
    whiteTheme(state) {
      state.theme = "white";
      localStorage.setItem("theme", JSON.stringify("change"));
    },
    darkTheme(state) {
      state.theme = "dark";
      localStorage.setItem("theme", JSON.stringify("dark"));
    },
    getMovie(state, action) {
      state.movie = action.payload;
    },
    getDetails(state, action) {
      state.details = action.payload;
    },
    getActor(state, action) {
      state.actor = action.payload;
    },
  },
});

export const { whiteTheme, darkTheme, getMovie, getDetails, getActor } =
  ProductSlice.actions;
export default ProductSlice.reducer;
