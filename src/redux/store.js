import { combineReducers, configureStore } from "@reduxjs/toolkit";
import animalSlice from "./slice/animalSlice";
import carouselSlice from "./slice/carouselSlice";
import menuSlice from "./slice/menuSlice";
import scrollSlice from "./slice/scrollSlice";
import storageSession from "redux-persist/es/storage/session";
import questionSlice from "./slice/questionSlice";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
const persistConfig = {
  key: "root",
  storage: storageSession,
  whitelist: ["animalSlice"],
};
const rootReducer = combineReducers({
  carouselSlice,
  animalSlice,
  scrollSlice,
  menuSlice,
  questionSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
export default store;
