import { useDispatch, useSelector } from "react-redux";
import { changeSearchValue } from "../store";

const CarSearch = () => {
  const dispatch = useDispatch();
  const { searchValue } = useSelector((state) => state.cars);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("search result is processing");
  };
  return (
    <div>
      <h2>My cars</h2>
      <div>
        <span>Search</span>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={searchValue}
            placeholder="search term"
            onChange={(e) =>
              dispatch(changeSearchValue({ searchValue: e.target.value }))
            }
          />
        </form>
      </div>
    </div>
  );
};

export default CarSearch;
