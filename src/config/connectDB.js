const { Sequelize } = require("sequelize");

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize("leelectronic", "root", null, {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});
let connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
module.exports = connectDB;

// import mysql from "mysql2";

// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   database: "leelectronic",
// });

// connection.query("SELECT * FROM `users` ", function (err, results, fields) {
//   console.log(">>>check mysql<<<");
//   console.log(results);
//   console.log(results[0]);
// });

// export default connection;
