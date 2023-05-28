const Movie = require("../models/movie.model");
const Screen = require("../models/screen.model");
const Theatre = require("../models/theatre.model");
const Show = require("../models/show.model");

const addData = async () => {
  try {
    const theatre1 = await Theatre.create({ name: "cinepolies" });
    const theatre2 = await Theatre.create({ name: "inox" });

    const movie1 = await Movie.create({ name: "Dhol", genre: "comedy" });
    const movie2 = await Movie.create({
      name: "Vikram Vdeha",
      genre: "action",
    });

    const screen1 = await Screen.create({
      name: "VIP",
      theatreId: 1,
    });
    const screen2 = await Screen.create({ name: "Normal", theatreId: 2 });

    const show1 = await Show.create({
      date: "2023-06-01",
      startTime: "10:00:00",
      endTime: "12:00:00",
      movieId: 1,
      screenId: 1,
      theatreId: 1,
    });
    const show2 = await Show.create({
      date: "2023-06-02",
      startTime: "10:00:00",
      endTime: "12:00:00",
      movieId: 2,
      screenId: 2,
      theatreId: 2,
    });
    console.log("Dummy data has been added");
  } catch (error) {
    console.log(error);
  }
};

module.exports = addData;
