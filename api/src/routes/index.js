const { Router } = require("express");
const axios = require("axios");
const { Videogame, Genre } = require("../db");
const { Op } = require("sequelize");
const { APIKEY } = process.env;
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const genresRoute = require("./genresRoute");
const videoGamesRoute = require("./videoGamesRoute");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/genres", genresRoute);
router.use("/videogames", videoGamesRoute);

/* const getApiGames = async () => {
  const apiURL = await axios.get(
    `https://api.rawg.io/api/games?key=${APIKEY}&page_size=100`
  );
  const gamesInfo = await apiURL.data.results.map((el) => {
    return {
      id: el.id,
      name: el.name,
      released: el.released,
      rating: el.rating,
      platforms: el.platforms.map((el) => el),
    };
  });
  return gamesInfo;
};

const getDbInfo = async (name) => {
  return await Videogame.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    },
    include: {
      model: Genre,
      attributes: ["id", "name"],
      through: {
        attributes: [],
      },
    },
  });
};

const getAllVideogames = async () => {
  const gamesInfo = await getApiGames();
  const DbInfo = await getDbInfo();
  const infototal = gamesInfo.concat(DbInfo);
  return infototal;
};

router.get("/videogames", async (req, res) => {
  const name = req.query.name;
  let charactersTotal = await getAllVideogames();
  if (name) {
    let charactername = await charactersTotal.filter((el) =>
      el.name.toLowerCase().includes(name.toLowerCase())
    );
    charactername.length
      ? res.status(200).send(charactername)
      : res.status(400).send("no esta");
  } else {
    res.status(200).send(charactersTotal);
  }
}); */
module.exports = router;
