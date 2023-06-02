import { configureStore } from "@reduxjs/toolkit";
import {
  carReducer,
  addCar,
  deleteCar,
  changeCost,
  changeName,
  changeSearchValue,
} from "./slices/carSlice";

const store = configureStore({
  reducer: {
    cars: carReducer,
  },
});

export { store, addCar, deleteCar, changeCost, changeName, changeSearchValue };
