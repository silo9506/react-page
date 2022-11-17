import { createSlice, current } from "@reduxjs/toolkit";

const initialState = { isCrrentPage: 0, displaymenu: false };

const scrollSlice = createSlice({
  name: "scrollSlice",
  initialState,
  reducers: {
    change: (state, action) => {
      state.isCrrentPage = action.payload;
    },
    display: (state, action) => {
      state.displaymenu = action.payload;
    },
  },
});

export const scrollSliceAction = scrollSlice.actions;
export default scrollSlice.reducer;
