const mogoose = require("mongoose");

const productSchema = new mogoose.Schema({
  id: String,
  name: String,
  image: String,
  description: String,
  price: String,
  size: [String],
});

module.exports = productSchema;
