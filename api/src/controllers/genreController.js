const axios = require("axios");
const { Genre } = require("../db");
const { APIKEY } = process.env;

const getInfo = async (req, res, next) => {
  try {
    let genreUrl = await axios.get(
      `https://api.rawg.io/api/genres?key=${APIKEY}`
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

    res.json({
      message: "generos",
      data: genreUrl.data.results,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getInfo,
};
