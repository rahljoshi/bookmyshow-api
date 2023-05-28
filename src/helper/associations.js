const Theatre = require("../models/theatre.model");
const Screen = require("../models/screen.model");
const Show = require("../models/show.model");
const Movie = require("../models/movie.model");

const { sequelize } = require("../config/db.config");
const associations = () => {
  Theatre.hasMany(Screen, {
    onDelete: "CASCADE",
  });
  Screen.belongsTo(Theatre);
  Movie.hasMany(Show, {
    onDelete: "CASCADE",
  });
  Show.belongsTo(Movie);

  // One to many
  Screen.hasMany(Show, {
    onDelete: "CASCADE",
  });
  Show.belongsTo(Screen);

  //One to many
  Theatre.hasMany(Show, {
    onDelete: "CASCADE",
  });
  Show.belongsTo(Theatre);

  // Run the migrations
  (async () => {
    try {
      await sequelize.sync({ alter: false }); // This will automatically run the migrations
      console.log("Migrations executed successfully.");
    } catch (error) {
      console.error("Error executing migrations:", error);
    }
  })();
};

module.exports = associations;
