const {
  searchVideoGameByName,
  getAllVideoGames,
} = require("../../controllers/index");

const getVideoGamesHandler = async (req, res) => {
  const { name } = req.query;

  const results = name
    ? await searchVideoGameByName(name)
    : await getAllVideoGames();

  try {
    res.status(200).json(results);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getVideoGamesHandler;
