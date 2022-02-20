const { Router } = require("express");

const router = Router();

const { getGender } = require("../controllers/genreController");

router.get("/", getGender);

module.exports = router;
