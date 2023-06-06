const { createVideoGame } = require("../../controllers/index");

const createVideoGameHandler = async (req, res) => {
  console.log(req.body);
  const {
    name,
    description,
    platforms,
    background_image,
    released,
    rating,
    genders,
  } = req.body;

  try {
    const newVideoGame = await createVideoGame({
      name,
      description,
      platforms,
      background_image,
      released,
      rating,
      genders,
    });
    res.status(200).json(newVideoGame);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

module.exports = createVideoGameHandler;
