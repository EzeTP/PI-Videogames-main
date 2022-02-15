const { Router } = require("express");

const router = Router();

const { getInfo } = require("../controllers/genreController");

router.get("/", getInfo);

module.exports = router;
