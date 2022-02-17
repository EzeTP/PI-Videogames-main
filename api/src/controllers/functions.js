c; /* onst { Op } = require("sequelize");
const { Videogames } = require("../db");

const gamesDB = async () => {
  const data = await Videogames.findAll({
    include: {
      model: Genre,
      attributes: ["id", "name"],
      through: {
        attributes: [],
      },
    },
  })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
  return data;
};

const gamesName = async (name) => {
  return await Videogames.findAll({
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

module.exports = {
  gamesDB,
  gamesName,
}; */
