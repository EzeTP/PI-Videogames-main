const axios = require("axios");
const { Videogame, Genre } = require("../db");
const { APIKEY } = process.env;

const getAllGames = async (req, res, next) => {
  try {
    const { name } = req.query;
    let request, request2, request3, finalrequest;
    if (name) {
      request = await axios.get(
        `https://api.rawg.io/api/games?search=${name}&key=${APIKEY}`
      );
      finalrequest = request.data.results;
    } else {
      request = await axios.get(
        `https://api.rawg.io/api/games?key=${APIKEY}&page_size=40`
      );

      request2 = await axios.get(
        `https://api.rawg.io/api/games?key=${APIKEY}&page=2&page_size=40`
      );

      request3 = await axios.get(
        `https://api.rawg.io/api/games?key=${APIKEY}&page=6&page_size=20`
      );

      finalrequest = [
        ...request.data.results,
        ...request2.data.results,
        ...request3.data.results,
      ];
    }

    const pedidoBaseDatos = await Videogame.findAll({
      include: Genre,
    });

    if (finalrequest || pedidoBaseDatos) {
      let aux = finalrequest.map((game) => {
        return {
          name: game.name,
          genres: game.genres,
          image: game.background_image,
          rating: game.rating,
          id: game.id,
          metacritic: game.metacritic,
        };
      });
      let final = aux;

      if (name) {
        final = final.slice(0, 15);
      } else {
        final = [...pedidoBaseDatos, ...aux];
      }

      res.send(final);
    } else {
      res.json({ message: "Something got wrong" });
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
        additionalImg: apiurl.background_image_additional,
        website: apiurl.website,
        metacritic: apiurl.metacritic,
        reddit: apiurl.reddit_url,
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

  console.log(description);
  const newGame = {
    name,
    description,
    released,
    rating,
    platforms,
    image,
  };
  console.log(newGame);
  const [createGame, alreadyCreated] = await Videogame.findOrCreate({
    where: {
      name: name,
    },
    defaults: newGame,
  });

  for (const i of genres) {
    const gen = await Genre.findOne({
      where: {
        name: i,
      },
    });
    createGame.addGenres(gen);
  }
  if (alreadyCreated) {
    res.send(alreadyCreated);
  } else {
    res.send(createGame);
  }
};

module.exports = {
  getAllGames,
  getGamesById,
  newGame,
};
