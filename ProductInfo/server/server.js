const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const pg = require("./db/index.js");
const Products = require("./db/products.js");

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname, "../client/dist")));

app.get("/api", function(req, res) {
  // console.log(req.query.ID);
  var id = req.query.ID;

  Products.findById(id)
    .then(product => {
      // console.log(product.dataValues);
      res.send(product.dataValues);
    })
    .catch(err => {
      console.log(err, "You got an error in the db bruh");
    });
});

app.post("/api", function(req, res) {
  var item = req.body;

  Products.create({
    brand: item.brand,
    product_name: item.product_name,
    product_price: item.product_price,
    product_rating: item.product_rating,
    product_loves: item.product_loves,
    product_img: item.product_img
  })
    .then(() => console.log("New item added, ON FLEEEEEK!"))
    .catch(e => console.error(e, "You done fuckdd up"));
});

module.exports = app;
