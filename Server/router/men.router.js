const express = require("express");
const { MenModel } = require("../models/product.model");
const productRouter = express.Router();

productRouter.get("/mens", async (req, res) => {
  try {
    const product = await MenModel.find().limit(15);
    const productlength = await MenModel.find().count();
    res
      .status(201)
      .json({ data: product, status: "success", totalCount: productlength });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong", status: "error" });
  }
});

productRouter.get("/mens/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await MenModel.find({ _id: id });
    res.status(201).json({ data: product, status: "success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong", status: "error" });
  }
});

module.exports = {
  productRouter,
};
