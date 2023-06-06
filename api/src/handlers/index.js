const getVideoGamesHandler = require("./videogames/getVideoGamesHandler");
const createVideoGameHandler = require("./videogames/createVideoGameHandler");
const getVideoGameByIdHandler = require("./videogames/getVideoGameByIdHandler");
const getGenresHandler = require("./genres/getGenresHandler");

module.exports = {
  getVideoGamesHandler,
  createVideoGameHandler,
  getGenresHandler,
  getVideoGameByIdHandler,
};
