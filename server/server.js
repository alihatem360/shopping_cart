const express = require("express");
const mogoose = require("mongoose");
const bodyParser = require("body-parser");
const Product = require("./models/productModal");
const router = require("./routes/productRouters");
const app = express();

app.use(bodyParser.json());
app.use("/api/v1", router);

// DB Config
const dbUrlString = "mongodb://localhost:27017/react-shopping-cart";

// Connect to MongoDB
mogoose
  .connect(dbUrlString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

// listen to port

app.listen(5000, () => {
  console.log("Server started at http://localhost:5000");
});
