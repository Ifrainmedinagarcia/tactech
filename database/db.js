const { Sequelize } = require("sequelize");
const { database } = require("./config");

const sequelize = new Sequelize(
  database.database,
  database.username,
  database.password,
  {
    host: database.host,
    dialect: "postgres",
  }
);

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Conectado.");
  })
  .catch((err) => {
    console.error("Error de conexion:", err);
  });

module.exports = sequelize;
