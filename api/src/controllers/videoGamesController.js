const axios = require("axios");
const { Videogame, Genre } = require("../db");
const { APIKEY } = process.env;
const { Op } = require("sequelize");

const getAllGames = async (req, res, next) => {
  try {
    const { name, page } = req.query;
    let apiGames = [];
    let dbGames = [];
    const searching = {
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
    };
    if (name) {
      apiGames = await axios(
        `https://api.rawg.io/api/games?search=${name}&key=${APIKEY}`
      );
      dbGames = await Videogame.findAll(searching);
    } else {
      apiGames = await axios(
        `https://api.rawg.io/api/games?key=${APIKEY}&page_size=40&page=${page}`
      );
      if (page === 1) apiGames = await Videogame.findAll(searching);
    }
    const filterApiGames = apiGames.data.results.map((g) => {
      return {
        id: g.id,
        name: g.name,
        rating: g.rating,
        genres: g.genres.map((e) => e.name),
        img: g.background_image,
      };
    });
    const videogames = [...dbGames, ...filterApiGames];
    if (name) {
      if (videogames.length > 0) return res.send(videogames.slice(0, 15));
      return res.status(404).send("no se consiguio este videojuego");
    }
    res.send(videogames);
  } catch (err) {
    next(err);
  }
};

const getGamesById = async (req, res, next) => {
  const { id } = req.params;
  let videogame;
  try {
    if (
      id.match(
        "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"
      )
    ) {
      videogame = await Videogame.findByPk(id, {
        include: {
          model: Genre,
          attributes: ["id", "name"],
          through: {
            attributes: [],
          },
        },
      });
    } else {
      const apiurl = (
        await axios(`https://api.rawg.io/api/games/${id}?key=${APIKEY}`)
      ).data;

      /* videogame = apiurl.map((e) => {
        return {
          id: e.id,
          name: e.name,
          genres: e.genres.map((e) => e.name),
          img: e.background_image,
          description: e.description,
          released: e.released,
          rating: e.rating,
          patforms: e.genres.map((e) => e.name),
        };
      }); */
      videogame = {
        id: apiurl.id,
        name: apiurl.name,
        genres: apiurl.genres.map((e) => e.name),
        background_image: apiurl.background_image,
        description: apiurl.description,
        released: apiurl.released,
        rating: apiurl.rating,
        platforms: apiurl.parent_platforms.flatMap((e) => e.platform.name),
      };
    }
    res.send(videogame);
  } catch (err) {
    next(err);
  }
};

const newGame = async (req, res) => {
  const { name, description, released, rating, platforms } = req.body;
  const createGame = await Videogame.create({
    name,
    description,
    released,
    rating,
    platforms,
  });

  res.send(createGame);
};

module.exports = {
  getAllGames,
  getGamesById,
  newGame,
};
