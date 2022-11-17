import { createSlice } from "@reduxjs/toolkit";
import banner01 from "../../assets/jpg/banner01.png";
import banner02 from "../../assets/jpg/banner02.png";
import banner03 from "../../assets/jpg/banner03.png";
const initialState = {
  banner: {
    timmer: false,
    counte: 0,
    max: 3,
    transition: false,
    array: [
      banner01,
      banner02,
      banner03,
      banner01,
      banner02,
      banner03,
      banner01,
      banner02,
      banner03,
    ],
  },
  carousel01: { counte: 0 },
  carousel02: { counte: 0 },
};

const CarouselSlice = createSlice({
  name: "CarouselSlice",
  initialState,
  reducers: {
    bannerMove: (state, action) => {
      let {
        banner: { counte, transition },
      } = state;
      if (action.payload === "up") {
        state.banner.counte = ++counte;
        state.banner.transition = true;
      } else {
        state.banner.counte = --counte;
        state.banner.transition = true;
      }
    },
    bannerLastMove: (state, action) => {
      if (action.payload === "up") {
        state.banner.counte = 0;
        state.banner.transition = false;
      } else {
        state.banner.counte = 2;
        state.banner.transition = false;
      }
    },
  },
});

export const CarouselActions = CarouselSlice.actions;
export default CarouselSlice.reducer;
