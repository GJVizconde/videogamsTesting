const { Sequelize, DataTypes } = require("sequelize");
const VideoGameModel = require("./models/VideoGame");
const GenreModel = require("./models/Genre");

require("dotenv").config();

const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/videogames`,
  { logging: false }
);

VideoGameModel(sequelize);
GenreModel(sequelize);

const { VideoGame, Genre } = sequelize.models;

VideoGame.belongsToMany(Genre, { through: "videogameGenre" });
Genre.belongsToMany(VideoGame, { through: "videogameGenre" });

module.exports = {
  sequelize,
  ...sequelize.models,
};
