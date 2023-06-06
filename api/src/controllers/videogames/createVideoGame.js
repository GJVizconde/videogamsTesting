const { VideoGame } = require("../../db");

const createVideoGame = async ({
  name,
  description,
  platforms,
  background_image,
  released,
  rating,
  genders,
}) => {
  const newVideoGame = await VideoGame.create({
    name,
    description,
    platforms,
    background_image,
    released,
    rating,
  });

  console.log(genders);

  newVideoGame.addGenres(genders);

  return newVideoGame;
};

module.exports = createVideoGame;
