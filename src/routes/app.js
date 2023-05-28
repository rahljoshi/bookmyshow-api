const router = require("express").Router();
const Movie = require("../models/movie.model");
const Screen = require("../models/screen.model");
const Theatre = require("../models/theatre.model");
const Show = require("../models/show.model");
const { Sequelize } = require("../config/db.config");

// get router for theatre
router.get("/theatre", async (req, res) => {
  const theatre = await Theatre.findAll();
  res.status(200).json(theatre);
});

// get all movies
router.get("/movies", async (req, res) => {
  const movies = await Movie.findAll();
  res.status(200).json(movies);
});

// get all shows
router.get("/shows", async (req, res) => {
  const shows = await Show.findAll();
  res.status(200).json(shows);
});

//get all screens
router.get("/screens", async (req, res) => {
  const screens = await Screen.findAll();
  res.status(200).json(screens);
});

//get shows for 7days
router.get("/nextShows", async (req, res) => {
  const today = new Date(); // Current date

  // Calculate the date for the next 7 days
  const nextSevenDays = [];
  for (let i = 0; i < 7; i++) {
    const nextDate = new Date(today.getTime() + i * 24 * 60 * 60 * 1000);
    nextDate.setUTCHours(0, 0, 0, 0);
    console.log(nextDate);
    nextSevenDays.push(nextDate);
  }

  // Retrieve data from the Sequelize database
  const shows = Show.findAll({
    where: {
      date: {
        // [Sequelize.Op]: [
        //   { [Sequelize.Op.gte]: today }, // Dates greater than or equal to today
        //   {
        [Sequelize.Op.between]: [today, nextSevenDays[6]],
        //   }, // Dates within the next 7 days
        // ],
      },
    },
  });
  res.status(200).json(shows);
});
module.exports = router;
