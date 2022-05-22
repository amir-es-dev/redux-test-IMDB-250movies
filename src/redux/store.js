import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./listSlice";
import favReducer from "./favSlice";

export default configureStore({
  reducer: {
    movieList: listReducer,
    favList: favReducer,
  },
});
