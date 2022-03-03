const axios = require("axios");
const { Genre } = require("../db");
const { APIKEY } = process.env;

const getInfo = async (req, res, next) => {
  try {
    let genreUrl = await axios.get(
      `https://api.rawg.io/api/genres?key=399af3f31db44d1f8b6994ba83e4314f`
    );

    let infoArr = [];

    genreUrl.data.results.map((g) => {
      infoArr.push({ id: g.id, name: g.name });
    });

    infoArr.forEach((el) => {
      Genre.findOrCreate({
        where: { id: el.id, name: el.name },
      });
    });

    let genderbd = await Genre.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    res.status(200).json(genderbd);
  } catch (err) {
    next(err);
  }
};

/* const getGenre = async (req, res, next) => {
  try {
    let genderbd = await Genre.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    res.status(200).json(genderbd);
  } catch (error) {
    next(error);
  }
}; */

module.exports = {
  getInfo,
};
