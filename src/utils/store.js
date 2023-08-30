import { configureStore } from "@reduxjs/toolkit";
import FavSlice from "./FavSlice";
import WatchlistSlice from "./WatchlistSlice";

const store = configureStore({
  reducer: {
    fav: FavSlice,
    watch: WatchlistSlice,
  },
});

export default store;
