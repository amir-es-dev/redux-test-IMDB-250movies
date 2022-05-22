import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: "movieList",
  initialState: { list: [] },
  reducers: {
    getList: (state, action) => {
      state.list = action.payload;
    },
  },
});
export const listActions = listSlice.actions;

export default listSlice.reducer;
