const Sequelize = require("sequelize");
const sequelize = new Sequelize({
  database: "sephora",
  username: "",
  password: null,
  dialect: "postgres"
});

module.exports = sequelize;
