const { Router } = require("express");

const router = Router();

const { getGenre } = require("../controllers/genreController");

router.get("/", getGenre);

module.exports = router;
