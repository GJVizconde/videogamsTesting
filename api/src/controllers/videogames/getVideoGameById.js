const axios = require("axios");
require("dotenv").config();

const { API_KEY } = process.env;

const { VideoGame, Genre } = require("../../db");

const getVideoGameById = async (id, source) => {
  let videoGameByIdApiRaw = {};
  let videoGameByIdApiCleaned = {};

  if (source === "api") {
    videoGameByIdApiRaw = (
      await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
    ).data;

    const cleanPlatforms = (arr) => {
      const clean = arr.map((elem) => {
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

    const cleanObj = (obj) => {
      const {
        id,
        name,
        description,
        platforms,
        background_image,
        released,
        rating,
        genres,
      } = obj;

      return {
        id,
        name,
        description,
        platforms: cleanPlatforms(platforms), //!
        background_image, //!
        released,
        rating,
        created: false,
        Genres: cleanGenres(genres),
      };
    };

    videoGameByIdApiCleaned = cleanObj(videoGameByIdApiRaw);
  }

  const newVideoGame =
    // source === "api" ? videoGameByIdApiCleaned : await VideoGame.findByPk(id);

    source === "api"
      ? videoGameByIdApiCleaned
      : await VideoGame.findAll({
          where: {
            id,
          },
          include: {
            model: Genre,
            attributes: ["name"],
            through: {
              attributes: [],
            },
          },
        });

  return newVideoGame;
};

module.exports = getVideoGameById;

// const axios = require("axios");

// const { VideoGame } = require("../../db");

// const getVideoGameById = async (id, source) => {
//   const newVideoGame =
//     source === "api"
//       ? (
//           await axios.get(
//             `https://api.rawg.io/api/games/${id}?key=e2012f450b584938bb6f46da38c924ef`
//           )
//         ).data
//       : await VideoGame.findByPk(id);

//   return newVideoGame;
// };

// module.exports = getVideoGameById;
