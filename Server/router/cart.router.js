const express = require("express");
const cartRouter = express.Router();

cartRouter.get("/", (req, res) => {
  res.send("cart items");
});

module.exports = {
  cartRouter,
};
