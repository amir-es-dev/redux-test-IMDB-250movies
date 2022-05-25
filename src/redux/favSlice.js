import { createSlice } from "@reduxjs/toolkit";

const favSlice = createSlice({
  name: "favList",
  initialState: { favlist: [] },
  reducers: {
    addMovie: (state, action) => {
      const copyArr = [...state.favlist];
      copyArr.push(action.payload);
      const sorted = copyArr.sort((a, b) => a.rank - b.rank);
      state.favlist = sorted;
    },
    removeMovie: (state, action) => {
      state.favlist = state.favlist.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const favActions = favSlice.actions;

export default favSlice.reducer;
