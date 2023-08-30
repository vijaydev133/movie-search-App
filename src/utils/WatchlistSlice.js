import { createSlice } from "@reduxjs/toolkit";

const WatchlistSlice = createSlice({
  name: "watch",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeItem: (state, action) => {
      state.items = [...action.payload];
    },
  },
});

export default WatchlistSlice.reducer;
export const { addItem, removeItem } = WatchlistSlice.actions;
