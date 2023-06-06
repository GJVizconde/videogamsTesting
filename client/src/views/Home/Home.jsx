import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { getAllGenres, getAllVideoGames } from "../../redux/actions";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import FilterBar from "../../components/FilterBar/FilterBar";

const Home = () => {
  const dispatch = useDispatch();

  let showVideoGames = useSelector((state) => state.showVideoGames);
  let allGenres = useSelector((state) => state.allGenres);

  const [opOrigin, setOpOrigin] = useState("");
  const [opGenre, setOpGenre] = useState("");
  const [opAlphabetical, setOpAlphabetical] = useState("");
  const [opRating, setOpRating] = useState("");

  useEffect(() => {
    dispatch(getAllVideoGames());
  }, [dispatch]);

  // useEffect(() => {
  //   console.log(showVideoGames); //! CONSOLE en tiempo real de showVideoGames
  // }, [showVideoGames]);

  useEffect(() => {
    dispatch(getAllGenres());
  }, [dispatch]);

  // useEffect(() => {
  //   console.log(allGenres); //! CONSOLE en tiempo real de allGenres
  // }, [allGenres]);

  return (
    <div>
      <h1>Home Modificado</h1>
      <div>
        <FilterBar
          allGenres={allGenres}
          setOpOrigin={setOpOrigin}
          opOrigin={opOrigin}
          opGenre={opGenre}
          setOpGenre={setOpGenre}
          opAlphabetical={opAlphabetical}
          setOpAlphabetical={setOpAlphabetical}
          opRating={opRating}
          setOpRating={setOpRating}
        />
      </div>
      <div>
        <CardsContainer showVideoGames={showVideoGames} />
      </div>
    </div>
  );
};

export default Home;
