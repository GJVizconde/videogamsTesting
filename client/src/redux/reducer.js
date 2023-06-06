import {
  GET_VIDEOGAMES,
  ORDER_BY_ORIGIN,
  GET_GENRES,
  FILTER_BY_GENRE,
  SORT_ALPHABETICAL,
  SORT_RATING,
} from "./actions";

const initialState = {
  allVideoGames: [],
  showVideoGames: [],
  allGenres: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VIDEOGAMES:
      // console.log("Estoy en Reducer"); //! CONSOLE llega info action al Reducer
      let allVideoGames = [...action.payload]; // Se ordenan en orden Alfabetico los VideoGames
      allVideoGames = allVideoGames.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      // console.log("Hola", allVideoGames); //! CONSOLE allVideoGames ordenado
      return {
        ...state,
        allVideoGames: allVideoGames,
        showVideoGames: allVideoGames,
      };
    case ORDER_BY_ORIGIN:
      let source = [];
      if (action.payload === "Origin") {
        source = state.allVideoGames;
      }
      if (action.payload === "BDD") {
        source = state.allVideoGames.filter((game) => game.created === true);
      }
      if (action.payload === "API") {
        source = state.allVideoGames.filter((game) => game.created === false);
      }
      return {
        ...state,
        showVideoGames: source,
      };
    case GET_GENRES:
      let getGenres = [...action.payload]; // Se ordenan en orden Alfabetico los Genres
      getGenres = getGenres.sort((a, b) => a.name.localeCompare(b.name));
      // console.log("Hola", allVideoGenders); //! CONSOLE allVideoGames ordenado
      return {
        ...state,
        allGenres: getGenres,
      };

    case FILTER_BY_GENRE:
      let arrayByGenre = [];
      const genre = action.payload;
      if (genre === "Genres") {
        arrayByGenre = state.allVideoGames;
      } else {
        arrayByGenre = state.allVideoGames.filter((game) =>
          game.Genres.some((gen) => gen.name === genre)
        );
      }
      return {
        ...state,
        showVideoGames: arrayByGenre,
      };
    case SORT_ALPHABETICAL:
      let arrayOrder = [...state.showVideoGames];
      const orderValue = action.payload;
      if (orderValue === "Order")
        arrayOrder.sort((a, b) => a.name.localeCompare(b.name));
      if (orderValue === "Reverse")
        arrayOrder.sort((a, b) => b.name.localeCompare(a.name));
      return {
        ...state,
        showVideoGames: arrayOrder,
      };

    case SORT_RATING:
      let arrayRating = [...state.showVideoGames];
      const ratingValue = action.payload;
      if (ratingValue === "Rating") arrayRating = state.allVideoGames;
      if (ratingValue === "Ascendent")
        arrayRating.sort((a, b) => a.rating - b.rating);
      if (ratingValue === "Descendent")
        arrayRating.sort((a, b) => b.rating - a.rating);
      return {
        ...state,
        showVideoGames: arrayRating,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
