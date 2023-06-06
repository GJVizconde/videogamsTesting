import { useDispatch } from "react-redux";
import { sortRating } from "../../redux/actions";

const SortByRating = ({ opRating, setOpRating }) => {
  const dispatch = useDispatch();

  const handleOrderChange = (event) => {
    const value = event.target.value;
    console.log(value); //!CONSOLE Verificando valor Menu Continents
    dispatch(sortRating(value)); // dispatch del value

    setOpRating(value);
  };

  return (
    <div>
      <select
        id="selectAlphabetical"
        onChange={handleOrderChange}
        name="selectAlphabeticalOrder"
        value={opRating}
      >
        <option value="Rating">Rating</option>
        <option value="Ascendent">Ascendent</option>
        <option value="Descendent">Descendent</option>
      </select>
    </div>
  );
};

export default SortByRating;
