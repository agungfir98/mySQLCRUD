const express = require("express");
const app = express();
require("dotenv").config();
const bodyparser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2");

const routeHandler = require("./route/route");
const PORT = process.env.PORT;
const password = process.env.DBPASSWORD;

module.exports = connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: password,
  database: "crud_mysql",
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  }
  console.log("database terhubung");
});

app.use(cors());
app.use(bodyparser.json());

app.use("/", routeHandler);

app.listen(PORT, () => console.log("App berjalan para PORT " + PORT));
