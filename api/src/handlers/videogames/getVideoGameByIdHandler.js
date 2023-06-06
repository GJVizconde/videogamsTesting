const { getVideoGameById } = require("../../controllers/index");

const getVideoGameByIdHandler = async (req, res) => {
  const { id } = req.params;

  const source = isNaN(id) ? "bdd" : "api";

  console.log(source, id);

  try {
    const newVideoGame = await getVideoGameById(id, source);
    res.status(200).json(newVideoGame);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getVideoGameByIdHandler;
