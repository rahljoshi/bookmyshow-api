const { sequelize, Sequelize } = require("../config/db.config");
const Theatre = require("./theatre.model");

const Screen = sequelize.define("screen", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
  },
});

sequelize.sync();
module.exports = Screen;
