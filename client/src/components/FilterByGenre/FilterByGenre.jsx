import { useDispatch } from "react-redux";
import { filterByGenre } from "../../redux/actions";

const FilterByGenre = ({ allGenres, opGenre, setOpGenre }) => {
  const dispatch = useDispatch();

  // console.log(allGenres); //! CONSOLE Check allGenres

  const handleChange = (event) => {
    const value = event.target.value;
    // console.log(value); //!CONSOLE Verificando valor Menu Genres
    dispatch(filterByGenre(value));
    setOpGenre(value);
  };

  return (
    <div>
      <select
        id="genreSelect"
        onChange={handleChange}
        name="genreMenu"
        value={opGenre}
      >
        <option value="Genres">Genres</option>
        {allGenres.map((genre) => {
          return (
            <option key={genre.id} value={genre.name}>
              {genre.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FilterByGenre;
