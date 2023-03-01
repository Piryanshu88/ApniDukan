const e = require("express");
const express = require("express");
const { MenModel } = require("../models/product.model");
const menRouter = express.Router();

menRouter.get("/mens", async (req, res) => {
  const category = req?.query?.category;
  const page = Math.max(0, req?.query?.page || 0);
  const limit = req?.query?.limit || 15;
  const sort = req?.query?.sortby;
  let min_price = req?.query?.min_price;
  let max_price = req?.query?.max_price;
  let s;
  if (sort == "asc") {
    s = 1;
  } else if (sort == "desc") {
    s = -1;
  }
  try {
    if (category && min_price && max_price) {
      min_price = Number(min_price);
      max_price = Number(max_price);
      console.log(min_price, max_price);
      const product = await MenModel.find({
        category: category,
        price: { $gte: min_price, $lte: max_price },
      }).limit(limit);
      const productlength = await MenModel.find({
        category: category,
        price: { $gte: min_price, $lte: max_price },
      }).count();

      res.status(201).json({
        data: product,
        status: "success",
        totalCount: productlength,
      });
    } else if (min_price && max_price) {
      min_price = Number(min_price);
      max_price = Number(max_price);
      const product = await MenModel.find({
        price: { $gte: min_price, $lte: max_price },
      }).limit(limit);
      const productlength = await MenModel.find({
        price: { $gte: min_price, $lte: max_price },
      }).count();

      res.status(201).json({
        data: product,
        status: "success",
        totalCount: productlength,
      });
    } else if (category && min_price) {
      min_price = Number(min_price);
      const product = await MenModel.find({
        price: { $gte: min_price },
        category: category,
      }).limit(limit);
      const productlength = await MenModel.find({
        price: { $gte: min_price },
      }).count();

      res.status(201).json({
        data: product,
        status: "success",
        totalCount: productlength,
      });
    } else if (category && max_price) {
      max_price = Number(max_price);
      const product = await MenModel.find({
        price: { $lte: max_price },
      }).limit(limit);
      const productlength = await MenModel.find({
        price: { $lte: max_price },
      }).count();

      res.status(201).json({
        data: product,
        status: "success",
        totalCount: productlength,
      });
    } else if (min_price) {
      min_price = Number(min_price);

      const product = await MenModel.find({
        price: { $gte: min_price },
      }).limit(limit);
      const productlength = await MenModel.find({
        price: { $gte: min_price },
      }).count();

      res.status(201).json({
        data: product,
        status: "success",
        totalCount: productlength,
      });
    } else if (max_price) {
      min_price = Number(min_price);
      max_price = Number(max_price);
      const product = await MenModel.find({
        price: { $lte: max_price },
      }).limit(limit);
      const productlength = await MenModel.find({
        price: { $lte: max_price },
      }).count();

      res.status(201).json({
        data: product,
        status: "success",
        totalCount: productlength,
      });
    } else if (category && sort) {
      const product = await MenModel.find({ category: category })
        .limit(limit)
        .sort({ price: s });
      const productlength = await MenModel.find({
        category: category,
      }).count();
      res.status(201).json({
        data: product,
        status: "success",
        totalCount: productlength,
      });
    } else if (category) {
      const product = await MenModel.find({ category: category })
        .limit(limit)
        .skip(limit * page);
      const productlength = await MenModel.find({
        category: category,
      }).count();
      res.status(201).json({
        data: product,
        status: "success",
        totalCount: productlength,
      });
    } else if (limit && page && sort) {
      const product = await MenModel.find()
        .limit(limit)
        .skip(limit * page)
        .sort({ price: s });
      const productlength = await MenModel.find().count();
      res.status(201).json({
        data: product,
        status: "success",
        totalCount: productlength,
      });
    } else if (page && sort) {
      const product = await MenModel.find()
        .limit(limit)
        .skip(limit * page)
        .sort({ price: s });
      const productlength = await MenModel.find().count();
      res.status(201).json({
        data: product,
        status: "success",
        totalCount: productlength,
      });
    } else if (page) {
      const product = await MenModel.find()
        .limit(limit)
        .skip(limit * page);
      const productlength = await MenModel.find().count();
      res.status(201).json({
        data: product,
        status: "success",
        totalCount: productlength,
      });
    } else {
      const product = await MenModel.find().limit(limit);
      const productlength = await MenModel.find().count();
      res.status(201).json({
        data: product,
        status: "success",
        totalCount: productlength,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong", status: "error" });
  }
});

menRouter.get("/mens/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await MenModel.find({ _id: id });
    res.status(201).json({ data: product, status: "success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong", status: "error" });
  }
});

menRouter.post("/mens/add", async (req, res) => {
  try {
    const product = new MenModel(req.body);
    product.save();
    res
      .status(201)
      .json({ message: "Product added successfully", status: "success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong", status: "error" });
  }
});

menRouter.patch("/mens/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await MenModel.findByIdAndUpdate({ _id: id }, req.body);
    res
      .status(201)
      .json({ message: "Data update successfully", status: "success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong", status: "error" });
  }
});

menRouter.delete("/mens/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await MenModel.findByIdAndDelete({ _id: id });
    res
      .status(201)
      .json({ message: "Data delete successfully", status: "success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong", status: "error" });
  }
});

module.exports = {
  menRouter,
};
