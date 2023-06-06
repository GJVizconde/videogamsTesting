import { useDispatch } from "react-redux";
import { sortAlph } from "../../redux/actions";

const SortAlphabetical = ({ opAlphabetical, setOpAlphabetical }) => {
  const dispatch = useDispatch();

  const handleOrderChange = (event) => {
    const value = event.target.value;
    console.log(value); //!CONSOLE Verificando valor Menu Continents
    dispatch(sortAlph(value)); // dispatch del value

    setOpAlphabetical(value);
  };

  return (
    <div>
      <select
        id="selectAlphabetical"
        onChange={handleOrderChange}
        name="selectAlphabeticalOrder"
        value={opAlphabetical}
      >
        <option value="Order">A-Z</option>
        <option value="Reverse">Z-A</option>
      </select>
    </div>
  );
};

export default SortAlphabetical;
