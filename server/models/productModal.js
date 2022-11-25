const mogoose = require("mongoose");
const productSchema = require("../schema/producSchema");

const Product = mogoose.model("products", productSchema);

module.exports = Product;
