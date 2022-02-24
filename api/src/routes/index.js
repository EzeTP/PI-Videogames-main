const { Router } = require("express");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const genresRoute = require("./genresRoute");
const videoGamesRoute = require("./videoGamesRoute");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/genres", genresRoute);
router.use("/videogames", videoGamesRoute);

module.exports = router;
