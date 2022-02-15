const { Router } = require("express");

const router = Router();

const {
  getAllGames,
  getGamesById,
  newGame,
} = require("../controllers/videoGamesController");

router.get("/", getAllGames);
router.get("/:id", getGamesById);
router.post("/", newGame);

module.exports = router;
