const { sequelize, Sequelize } = require("../config/db.config");
const Movie = sequelize.define("movie", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
  },
  genre: {
    type: Sequelize.STRING,
  },
});

sequelize.sync();
module.exports = Movie;
