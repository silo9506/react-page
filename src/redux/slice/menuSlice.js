import { createSlice, current } from "@reduxjs/toolkit";

const initialState = { ondisplay: false };

const menuSlice = createSlice({
  name: "menuSlice",
  initialState,
  reducers: {
    open: (state, action) => {
      state.ondisplay = true;
    },
    close: (state, action) => {
      state.ondisplay = false;
    },
  },
});

export const menuSliceAction = menuSlice.actions;
export default menuSlice.reducer;
