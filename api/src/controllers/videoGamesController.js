const axios = require("axios");
const { Videogame, Genre } = require("../db");
const { APIKEY } = process.env;
const { Op } = require("sequelize");

/* const getAllGames = async (req, res, next) => {
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
      if (page === 1) dbGames = await Videogame.findAll({ include: Genre });
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
}; */
const getAllGames = async (req, res, next) => {
  try {
    let pedido, pedi2, pedi3, pedidofinal;
    if (req.query.name) {
      gameName = req.query.name;
      pedido = await axios.get(
        `https://api.rawg.io/api/games?search=${gameName}&key=${APIKEY}`
      );
      pedidofinal = pedido.data.results;
    } else {
      pedido = await axios.get(
        `https://api.rawg.io/api/games?key=${APIKEY}&page_size=40`
      );

      pedi2 = await axios.get(
        `https://api.rawg.io/api/games?key=${APIKEY}&page=2&page_size=40`
      );

      pedi3 = await axios.get(
        `https://api.rawg.io/api/games?key=${APIKEY}&page=5&page_size=20`
      );

      pedidofinal = [
        ...pedido.data.results,
        ...pedi2.data.results,
        ...pedi3.data.results,
      ];
    }

    const pedidoBaseDatos = await Videogame.findAll({ include: Genre });
    if (pedidofinal || pedidoBaseDatos) {
      let aux = pedidofinal.map((game) => {
        return {
          name: game.name,
          genres: game.genres,
          image: game.background_image,
          rating: game.rating,
          id: game.id,
        };
      });
      let final = aux;
      if (req.query.name) {
        final = final.slice(0, 15);
      } else {
        final = [...pedidoBaseDatos, ...aux];
      }

      if (req.query.genreName && final) {
        let selectedGenre = req.query.genreName;
        final = final.filter((game) => {
          return game.genres
            ?.map((gnr) => {
              return gnr.name;
            })
            .includes(selectedGenre);
        }); //fin filter
      }

      if (final[0]) {
        res.send(final);
      } else {
        res.json({
          message: "Ningun videojuego cumple con los parametros de busqueda",
        });
      }
    } else {
      res.json({ message: "Error, algo salio mal" });
    }
  } catch (e) {
    next(e);
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
  const { name, description, released, rating, platforms, genres, image } =
    req.body;
  const createGame = await Videogame.create({
    name,
    description,
    released,
    rating,
    platforms,
    image,
  });
  /* console.log(genres[0]);
  genres.forEach(async (genre) => {
    const actualGenre = await Genre.findOne({
      where: { name: genre.name },
    });
    await createGame.addGenres(actualGenre.id);
  }); */
  for (const i of genres) {
    const gen = await Genre.findOne({
      where: {
        name: i,
      },
    });
    createGame.addGenres(gen);
  }

  res.send(createGame);
};

module.exports = {
  getAllGames,
  getGamesById,
  newGame,
};
