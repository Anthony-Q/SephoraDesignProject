var items = require("../data/sephoraData.json");
var Products = require("./db/products");

var insertAllItems = function(items) {
  items.map(item =>
    Products.create({
      brand: item.brand,
      product_name: item.product_name,
      product_price: item.product_price,
      product_rating: item.product_rating,
      product_loves: item.product_loves,
      product_img: item.product_img
    })
      .then(() => console.log("Items added!"))
      .catch(e => console.error(e, "You done fuckdd up"))
  );
};

Products.sync({ force: true })
  .then(() => {
    insertAllItems(items);
  })
  .catch(e => console.error("erewr", e));
