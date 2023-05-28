const express = require("express");
const bodyParser = require("body-parser");
const { connectToDB } = require("./src/config/db.config");
const associations = require("./src/helper/associations");
const addData = require("./src/helper/dataDump");

const router = require("./src/routes/app");
const app = express();
app.use(bodyParser.json());

app.use("/", router);
app.listen(3000, () => {
  console.log("Server is started");
  connectToDB();
  associations();
  //   addData();
});
