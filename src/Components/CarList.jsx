import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCar } from "../store";

const CarList = () => {
  const { carList } = useSelector((state) => state.cars);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteCar({ id }));
  };
  const renderedList = carList?.map((car) => (
    <div key={car.id}>
      <h2>{car.name}</h2>
      <h2>{car.cost}</h2>
      <button onClick={() => handleDelete(car.id)}>Delete</button>
    </div>
  ));
  return renderedList ||[];
};

export default CarList;
