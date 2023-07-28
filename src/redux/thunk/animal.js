import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const PhotoKey = process.env.REACT_APP_ANIMAL_IMG_KEY;
const DataKey = process.env.REACT_APP_ANIMAL_DATA_KEY;
// const AnimalKey = process.env.REACT_APP_ANIMAL_ENCHART;
const AnimalKey = process.env.REACT_APP_ANIMAL_DECHART;

const animalsInstance = axios.create({
  baseURL:
    "https://silo9506.herokuapp.com/http://apis.data.go.kr/1543061/abandonmentPublicSrvc",
  method: "get",
  params: {
    serviceKey: AnimalKey,
    _type: "json",
  },
});

export const seoulAnimalPhoto = createAsyncThunk(
  "getSeoulAnimalPhoto",
  async () => {
    const result = await axios({
      mathod: "get",
      url: `https://silo9506.herokuapp.com/http://openapi.seoul.go.kr:8088/${PhotoKey}/json/TbAdpWaitAnimalPhotoView/1/999`,
    });

    return result;
  }
);

export const seoulAniamlData = createAsyncThunk(
  "geSeoulAniamlData",
  async () => {
    const result = await axios({
      mathod: "get",
      url: `https://silo9506.herokuapp.com/http://openapi.seoul.go.kr:8088/${DataKey}/json/TbAdpWaitAnimalView/1/999/`,
    });

    return result;
  }
);

export const seoulAnimals = createAsyncThunk(
  "getSeoulAnimals",
  async (params) => {
    const result = await animalsInstance({
      url: "abandonmentPublic",
      params: { ...params, upr_cd: 6110000, numOfRows: 1000 },
    });
    return result;
  }
);
