const { sequelize, Sequelize } = require("../config/db.config");
const Theatre = sequelize.define("theatre", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

sequelize.sync();
module.exports = Theatre;
