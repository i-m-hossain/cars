import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  name: "",
  cost: 0,
  searchValue: "",
  carList: [],
};
const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    changeName: (state, { payload }) => {
      state.name = payload.name;
      return;
    },
    changeCost: (state, { payload }) => {
      state.cost = payload.cost;
      return;
    },
    changeSearchValue: (state, { payload }) => {
      state.searchValue = payload.searchValue;
      return;
    },
    addCar: (state) => {
      state.carList.push({
        id: Math.round(Math.random() * 1000),
        name: state.name,
        cost: state.cost,
      });
      state.name = "";
      state.cost = 0;
      return;
    },
    deleteCar: (state, { payload }) => {
      const filteredCars = state.carList.filter((car) => car.id !== payload.id);
      //   const index = state.carList.findIndex((item) => item.id === payload.id);
      //   state.carList.splice(index, 1);
      state.carList = filteredCars;
      return;
    },
    filterCars:(state, {payload})=>{
            
    }
  },
});

export const { changeCost, changeName, changeSearchValue, addCar, deleteCar } =
  carSlice.actions;
export const carReducer = carSlice.reducer;
