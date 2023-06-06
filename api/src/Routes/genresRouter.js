const { Router } = require("express");

const { getGenresHandler } = require("../handlers/index");

const genresRouter = Router();

genresRouter.get("/", getGenresHandler);

module.exports = genresRouter;
