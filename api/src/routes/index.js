const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const genreRoute = require("./genre");
const videogameRoute = require("./videogame");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/genre", genreRoute);
router.use("./videogame", videogameRoute);

module.exports = router;
