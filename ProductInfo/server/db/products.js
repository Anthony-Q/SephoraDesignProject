var sequelize = require("./index");
var Sequelize = require("sequelize");

const Products = sequelize.define("products", {
  brand: Sequelize.STRING,
  product_name: Sequelize.STRING,
  product_price: Sequelize.STRING,
  product_rating: Sequelize.DECIMAL(10, 1),
  product_loves: Sequelize.INTEGER,
  product_img: Sequelize.STRING
});

module.exports = Products;
