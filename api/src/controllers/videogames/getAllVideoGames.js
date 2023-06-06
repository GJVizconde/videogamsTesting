const { VideoGame, Genre } = require("../../db");
const axios = require("axios");

require("dotenv").config();

const { API_KEY } = process.env;

const cleanPlatforms = (array) => {
  const clean = array.map((elem) => {
    return elem.platform.name;
  });
  return clean;
};

const cleanGenres = (arr) => {
  const clean = arr.map((elem) => {
    return { name: elem.name };
  });

  return clean;
};

const cleanArray = (array) => {
  const cleaning = array.map((elem) => {
    return {
      id: elem.id,
      name: elem.name,
      description: elem.description,
      platforms: cleanPlatforms(elem.platforms),
      background_image: elem.background_image,
      released: elem.released,
      rating: elem.rating,
      Genres: cleanGenres(elem.genres),
      created: false,
    };
  });
  return cleaning;
};

const getAllVideoGames = async () => {
  const dbbVideoGames = await VideoGame.findAll({
    include: {
      model: Genre,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });

  const apiVideoGames = [];

  let pageNumber = 1;

  while (apiVideoGames.length <= 80) {
    const response = await axios.get(
      `https://api.rawg.io/api/games?key=${API_KEY}&page=${pageNumber}`
    );

    apiVideoGames.push(...response.data.results);

    pageNumber++;
  }

  const cleanedVideoGames = cleanArray(apiVideoGames);

  //   console.log(apiVideoGames.length);

  return [...dbbVideoGames, ...cleanedVideoGames];
};

module.exports = getAllVideoGames;

//!

// const getAllVideoGames = async () => {
//     const dbbVideoGames = await VideoGame.findAll();

//     const apiVideoGamesRaw = (
//       await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`)
//     ).data.results;

//     const ApiAllVideoGames = cleanArray(apiVideoGamesRaw);

//     console.log(ApiAllVideoGames.length);

//     return ApiAllVideoGames;
//   };

//   module.exports = getAllVideoGames;
