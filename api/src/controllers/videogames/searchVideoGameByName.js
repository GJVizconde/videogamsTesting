const { VideoGame } = require("../../db");
const axios = require("axios");
const { Op } = require("sequelize");

require("dotenv").config();

const { API_KEY } = process.env;

const cleanPlatforms = (array) => {
  const clean = array.map((elem) => {
    return elem.platform.name;
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
      created: false,
    };
  });
  return cleaning;
};

const searchVideoGameByName = async (name) => {
  const dataBaseUsers = await VideoGame.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    },
  });

  const apiVideoGamesRaw = (
    await axios.get(
      `https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`
    )
  ).data.results;

  const apiVideoGames = cleanArray(apiVideoGamesRaw);

  const findedVideoGames = [...dataBaseUsers, ...apiVideoGames];

  const first15Results = findedVideoGames.slice(0, 15);

  // console.log(first15Results.length);

  return first15Results;
};

module.exports = searchVideoGameByName;
