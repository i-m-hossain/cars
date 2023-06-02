
import { useSelector } from "react-redux";

const CarValue = () => {
  const { carList } = useSelector((state) => state.cars) ||[];
  const totalValue = carList.reduce((prev, current) => prev + current.cost, 0);
  return <div>${totalValue}</div>;
};

export default CarValue;
