import { configureStore } from "@reduxjs/toolkit";
import FavSlice from "./FavSlice";
import WatchlistSlice from "./WatchlistSlice";
import SearchSlice from "./SearchSlice";

const store = configureStore({
  reducer: {
    fav: FavSlice,
    watch: WatchlistSlice,
    search: SearchSlice,
  },
});

export default store;
