const Sequelize = require("sequelize");

const dbName = "customer";
const dbuser = "root";
const dbpassword = "admin";

const sequelize = new Sequelize(dbName, dbuser, dbpassword, {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
});

const connectToDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Successfully connected to the database.");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { sequelize, Sequelize, connectToDB };
