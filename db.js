const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_landtick_app"
});

connection.connect();
module.exports = connection;
