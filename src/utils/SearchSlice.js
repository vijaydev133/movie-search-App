import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cachedItems: (state, action) => {
      state = { ...state, ...action.payload };
    },
  },
});

export default SearchSlice.reducer;
export const { cachedItems } = SearchSlice.actions;
