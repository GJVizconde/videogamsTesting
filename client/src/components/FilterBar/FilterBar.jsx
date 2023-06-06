import style from "./FilterBar.module.css";
import FilterByOrigin from "../FilterByOrigin/FilterByOrigin";
import FilterByGenre from "../FilterByGenre/FilterByGenre";
import SortAlphabetical from "../SortAlphabetical/SortAlphabetical";
import SortByRating from "../SortByRating/SortByRating";

const FilterBar = ({
  allGenres,
  setOpOrigin,
  opOrigin,
  opGenre,
  setOpGenre,
  opAlphabetical,
  setOpAlphabetical,
  opRating,
  setOpRating,
}) => {
  return (
    <div className={style.filters}>
      <FilterByOrigin setOpOrigin={setOpOrigin} opOrigin={opOrigin} />
      <FilterByGenre
        allGenres={allGenres}
        opGenre={opGenre}
        setOpGenre={setOpGenre}
      />
      <SortAlphabetical
        opAlphabetical={opAlphabetical}
        setOpAlphabetical={setOpAlphabetical}
      />
      <SortByRating opRating={opRating} setOpRating={setOpRating} />
    </div>
  );
};

export default FilterBar;
