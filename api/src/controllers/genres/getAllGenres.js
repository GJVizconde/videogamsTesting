const axios = require("axios");
const { Genre } = require("../../db");

const cleanGames = (arr) => {
  const cleaning = arr.map((elem) => {
    return elem.id;
  });
  return cleaning;
};

const getAllGenres = async () => {
  const bdd = await Genre.findAll();

  if (!bdd.length) {
    const apiGenresRaw = (
      await axios.get(
        `https://api.rawg.io/api/genres?key=e2012f450b584938bb6f46da38c924ef`
      )
    ).data.results;

    // console.log(apiGenresRaw);
    // console.log(apiGenresRaw[0].games);

    const genresData = await apiGenresRaw.map((dat) => {
      return {
        id: dat.id,
        name: dat.name,
        image_background: dat.image_background,
        // videogames: cleanGames(dat.games),
      };
    });

    console.log(genresData);

    await Genre.bulkCreate(genresData);

    const bddUpdated = await Genre.findAll();
    return bddUpdated;
  } else {
    return bdd;
  }
};

module.exports = getAllGenres;
