const { Router } = require("express");

const {
  getVideoGamesHandler,
  getVideoGameByIdHandler,
  createVideoGameHandler,
} = require("../handlers/index");

const videoGamesRouter = Router();

videoGamesRouter.get("/", getVideoGamesHandler);

videoGamesRouter.get("/:id", getVideoGameByIdHandler);

videoGamesRouter.post("/", createVideoGameHandler);

module.exports = videoGamesRouter;
