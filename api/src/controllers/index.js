const createVideoGame = require("./videogames/createVideoGame");
const getVideoGameById = require("./videogames/getVideoGameById");
const searchVideoGameByName = require("./videogames/searchVideoGameByName");
const getAllVideoGames = require("./videogames/getAllVideoGames");
const getAllGenres = require("./genres/getAllGenres");

module.exports = {
  createVideoGame,
  getVideoGameById,
  searchVideoGameByName,
  getAllVideoGames,
  getAllGenres,
};
