import axios from "axios";

export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const ORDER_BY_ORIGIN = "ORDER_BY_ORIGIN";
export const GET_GENRES = "GET_GENRES";
export const FILTER_BY_GENRE = "FILTER_BY_GENRE";
export const SORT_ALPHABETICAL = "SORT_ALPHABETICAL";
export const SORT_RATING = "SORT_RATING";

export const getAllVideoGames = () => {
  return async function (dispatch) {
    // console.log("Estoy en axios"); //! CONSOLE dispatch llego a axios
    const allVideoGames = (await axios.get("http://localhost:3001/videogames"))
      .data;

    dispatch({
      type: GET_VIDEOGAMES,
      payload: allVideoGames,
    });
  };
};

export const orderByOrigin = (source) => {
  return {
    type: ORDER_BY_ORIGIN,
    payload: source,
  };
};

export const getAllGenres = () => {
  return async function (dispatch) {
    // console.log("Estoy en axios"); //! CONSOLE dispatch llego a axios
    const allGenres = (await axios.get("http://localhost:3001/genres")).data;

    dispatch({
      type: GET_GENRES,
      payload: allGenres,
    });
  };
};

export const filterByGenre = (genre) => {
  return {
    type: FILTER_BY_GENRE,
    payload: genre,
  };
};

export const sortAlph = (orderAlph) => {
  return {
    type: SORT_ALPHABETICAL,
    payload: orderAlph,
  };
};

export const sortRating = (orderRating) => {
  return {
    type: SORT_RATING,
    payload: orderRating,
  };
};
