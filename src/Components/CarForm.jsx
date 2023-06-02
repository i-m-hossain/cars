import { useDispatch, useSelector } from "react-redux";
import { addCar, changeCost, changeName } from "../store";

const CarForm = () => {
  const dispatch = useDispatch();
  const { name, cost } = useSelector((state) => state.cars);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCar());
  };
  return (
    <form onSubmit={handleSubmit} className="">
      <input
        type="text"
        value={name}
        onChange={(e) => dispatch(changeName({ name: e.target.value }))}
        placeholder="car name"
        required
      />
      <input
        type="number"
        value={cost || ""}
        onChange={(e) =>
          dispatch(changeCost({ cost: parseInt(e.target.value) || 0 }))
        }
        placeholder="cost"
        required
      />
      <button type="submit">Add Car</button>
    </form>
  );
};

export default CarForm;
