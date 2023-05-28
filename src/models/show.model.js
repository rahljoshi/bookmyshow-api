const { sequelize, Sequelize } = require("../config/db.config");

const Show = sequelize.define("show", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  date: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  startTime: {
    type: Sequelize.TIME,
    allowNull: false,
  },
  endTime: {
    type: Sequelize.TIME,
    allowNull: false,
  },
});

sequelize.sync();
module.exports = Show;
