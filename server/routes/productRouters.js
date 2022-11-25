const express = require("express");
const Product = require("../models/productModal");
const router = express.Router();
// get all products

// router.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

router.get("/api/v1/products", async (req, res) => {
  const products = await Product.find({});
  res.send(products);
});

// post product

// router.post("/api/products", async (req, res) => {
//   const newProduct = new Product(req.body);
//   const savedProduct = await newProduct.save();
//   res.send(savedProduct);
// });

// delete product

// router.delete("/api/products/:id", async (req, res) => {
//   const deletedProduct = await Product.findByIdAndDelete(req.params.id);
//   res.send(deletedProduct);
// });

module.exports = router;
