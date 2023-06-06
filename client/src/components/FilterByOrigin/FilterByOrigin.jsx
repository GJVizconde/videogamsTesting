import { useDispatch } from "react-redux";
import { orderByOrigin } from "../../redux/actions";

const FilterByOrigin = ({ setOpOrigin, opOrigin }) => {
  const dispatch = useDispatch();

  const handleOriginChange = (event) => {
    const value = event.target.value;
    console.log(value);
    setOpOrigin(value);
    dispatch(orderByOrigin(value));
  };

  return (
    <div>
      <select
        id="filteOrigin"
        onChange={handleOriginChange}
        name="OriginMenu"
        value={opOrigin}
      >
        <option value="Origin">Origin</option>
        <option value="BDD">BDD</option>
        <option value="API">API</option>
      </select>
    </div>
  );
};

export default FilterByOrigin;
