const Sequelize = require("sequelize");
require("dotenv").config();
// const Runner = require("run-my-sql-file");

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: "localhost",
      dialect: "mysql",
      port: 3306,
    }
  );
}

// Runner.connectionOptions({
//   host: process.env.DB_NAME,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
// });

// const filepath = "./db/schema.sql";
// Runner.runFile(filepath, (err) => {
//   if (err) {
//     console.log("unable to find the schema file");
//   } else {
//     console.log("Schema sucessfully sourced!");
//   }
// });

module.exports = sequelize;
