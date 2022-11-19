import { createSlice, current } from "@reduxjs/toolkit";
import {
  seoulAniamlData,
  seoulAnimalPhoto,
  seoulAnimals,
} from "../thunk/animal";

const initialState = {
  data: { seoulanimals: [], cat: [], dog: [], total: [] },
  photo: [],
  loading: true,
  filter: "all",
};

const animalSlice = createSlice({
  name: "animal",
  initialState,
  reducers: {
    select: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(seoulAnimalPhoto.pending, (state, actions) => {
      console.log("로딩중");
    });
    builder.addCase(seoulAnimalPhoto.fulfilled, (state, actions) => {
      let result = actions.payload.data.TbAdpWaitAnimalPhotoView.row;
      // let cat = current(state.data.cat);
      // let dog = current(state.data.dog);

      // state.photo.cat = cat.map((nomber) => {
      //   return result.filter((photo) => nomber.ANIMAL_NO === photo.ANIMAL_NO);
      // });
      // state.photo.dog = dog.map((nomber) => {
      //   return result.filter((photo) => nomber.ANIMAL_NO === photo.ANIMAL_NO);
      // });
      state.photo = result;
      state.loading = false;
    });
    builder.addCase(seoulAnimalPhoto.rejected, (state, actions) => {
      console.log(actions, "오류");
    });

    //
    //
    builder.addCase(seoulAniamlData.pending, (state, actions) => {
      console.log("로딩중");
      state.loading = true;
    });

    builder.addCase(seoulAniamlData.fulfilled, (state, actions) => {
      const result = actions.payload.data.TbAdpWaitAnimalView.row;
      state.data.cat = result.filter((animal) => animal.SPCS === "CAT");
      state.data.dog = result.filter((animal) => animal.SPCS === "DOG");
      state.data.total = result;
      console.log(result);
    });

    builder.addCase(seoulAniamlData.rejected, (state, actions) => {
      console.log(actions, "오류");
    });

    //
    //
    builder.addCase(seoulAnimals.pending, (state, actions) => {
      console.log("로딩중");
      state.loading = true;
    });

    builder.addCase(seoulAnimals.fulfilled, (state, actions) => {
      console.log(actions.payload.data.response.body);
      state.data.seoulanimals = actions.payload.data.response.body.items.item;
    });

    builder.addCase(seoulAnimals.rejected, (state, actions) => {
      console.log(actions, "오류");
    });
  },
});
export default animalSlice.reducer;
export const animalAction = animalSlice.actions;
