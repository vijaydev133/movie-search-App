import { createSlice } from "@reduxjs/toolkit";
// import { useSelector } from "react-redux";
// import store from "./store";

// const selector = useSelector((store) => store.fav.items);

const FavSlice = createSlice({
  name: "fav",
  initialState: {
    items: [],
  },
  reducers: {
    addFav: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFav: (state, action) => {
      state.items = [...action.payload];
    },
  },
});

export default FavSlice.reducer;
export const { addFav, removeFav } = FavSlice.actions;
