const express = require("express");
const { KidModel } = require("../models/product.model");
const kidRouter = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    Kids:
 *      type: object
 *      properties:
 *        _id:
 *          type: string
 *          description: The auto-generated id of the product
 *        articleCode:
 *          type: string
 *          description: A unique code of the product
 *        title:
 *          type: string
 *          description: title of the product
 *        favouritesNotSavedText:
 *          type: string
 *        favouritesSavedText:
 *          type: string
 *        favouritesTracking:
 *          type: string
 *        image:
 *          type: array
 *          description: Images of the product
 *        category:
 *          type: string
 *          description: category of the product
 *        price:
 *          type: integer
 *          description: price of the product
 *        sellingAttribute:
 *          type: string
 *        swatchesTotal:
 *          type: string
 *        swatches:
 *          type: array
 *        brandName:
 *          type: string
 *          description: brand of the product
 *        percentageDiscount:
 *          type: string
 *        redPrice:
 *          type: string
 *        comingSoon:
 *          type: string
 *        outOfStockText:
 *          type: string
 */

/**
 * @swagger
 * tags:
 *  name: Kids
 *  description: All the API routes  related to Kids Products
 */

/**
 * @swagger
 * /products/kids?q={query}:
 *    get:
 *      summary: get products
 *      tags: [Kids]
 *      parameters:
 *        - in: path
 *          name: q
 *          description: search products by this query
 *          schema:
 *            type: string
 *        - in: path
 *          name: limit
 *          required: false
 *          description: To limit the number of product (by default its 15)
 *          schema:
 *            type: integer
 *        - in: path
 *          name: page
 *          required: false
 *          description: page number  (by default its 0)
 *          schema:
 *            type: integer
 *        - in: path
 *          name: sortby
 *          required: false
 *          description: sort products by it price ( you can use 'asc' or 'desc' )
 *          schema:
 *            type: string
 *      responses:
 *        200:
 *          description: Getting data by search
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  data:
 *                    $ref: '#/components/schemas/Kids'
 *                  status:
 *                    type: string
 *                    description: Success
 *                  totalCount:
 *                    type: string
 *        500:
 *          description: Something went wrong
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                  status:
 *                    type: string
 *                    description: Failed
 */

kidRouter.get("/kids", async (req, res) => {
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
      const product = await KidModel.find({
        category: category,
        price: { $gte: min_price, $lte: max_price },
      }).limit(limit);
      const productlength = await KidModel.find({
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
      const product = await KidModel.find({
        price: { $gte: min_price, $lte: max_price },
      }).limit(limit);
      const productlength = await KidModel.find({
        price: { $gte: min_price, $lte: max_price },
      }).count();

      res.status(201).json({
        data: product,
        status: "success",
        totalCount: productlength,
      });
    } else if (category && min_price) {
      min_price = Number(min_price);
      const product = await KidModel.find({
        price: { $gte: min_price },
        category: category,
      }).limit(limit);
      const productlength = await KidModel.find({
        price: { $gte: min_price },
      }).count();

      res.status(201).json({
        data: product,
        status: "success",
        totalCount: productlength,
      });
    } else if (category && max_price) {
      max_price = Number(max_price);
      const product = await KidModel.find({
        price: { $lte: max_price },
      }).limit(limit);
      const productlength = await KidModel.find({
        price: { $lte: max_price },
      }).count();

      res.status(201).json({
        data: product,
        status: "success",
        totalCount: productlength,
      });
    } else if (min_price) {
      min_price = Number(min_price);

      const product = await KidModel.find({
        price: { $gte: min_price },
      }).limit(limit);
      const productlength = await KidModel.find({
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
      const product = await KidModel.find({
        price: { $lte: max_price },
      }).limit(limit);
      const productlength = await KidModel.find({
        price: { $lte: max_price },
      }).count();

      res.status(201).json({
        data: product,
        status: "success",
        totalCount: productlength,
      });
    } else if (category && sort) {
      const product = await KidModel.find({ category: category })
        .limit(limit)
        .sort({ price: s });
      const productlength = await KidModel.find({
        category: category,
      }).count();
      res.status(201).json({
        data: product,
        status: "success",
        totalCount: productlength,
      });
    } else if (category) {
      const product = await KidModel.find({ category: category })
        .limit(limit)
        .skip(limit * page);
      const productlength = await KidModel.find({
        category: category,
      }).count();
      res.status(201).json({
        data: product,
        status: "success",
        totalCount: productlength,
      });
    } else if (limit && page && sort) {
      const product = await KidModel.find()
        .limit(limit)
        .skip(limit * page)
        .sort({ price: s });
      const productlength = await KidModel.find().count();
      res.status(201).json({
        data: product,
        status: "success",
        totalCount: productlength,
      });
    } else if (page && sort) {
      const product = await KidModel.find()
        .limit(limit)
        .skip(limit * page)
        .sort({ price: s });
      const productlength = await KidModel.find().count();
      res.status(201).json({
        data: product,
        status: "success",
        totalCount: productlength,
      });
    } else if (page) {
      const product = await KidModel.find()
        .limit(limit)
        .skip(limit * page);
      const productlength = await KidModel.find().count();
      res.status(201).json({
        data: product,
        status: "success",
        totalCount: productlength,
      });
    } else if (sort) {
      const product = await KidModel.find().limit(limit).sort({ price: s });
      const productlength = await KidModel.find().count();
      res.status(201).json({
        data: product,
        status: "success",
        totalCount: productlength,
      });
    } else {
      const product = await KidModel.find().limit(limit);
      const productlength = await KidModel.find().count();
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

/**
 * @swagger
 * /products/kids/{id}:
 *    get:
 *      summary: get product by its id
 *      tags: [Kids]
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: Numeric ID of the product to retrieve.
 *          schema:
 *            type: integer
 *      responses:
 *        200:
 *          description: Getting data by ID
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  data:
 *                    $ref: '#/components/schemas/Kids'
 *                  status:
 *                    type: string
 *                    description: Success
 *        500:
 *          description: Something went wrong
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                  status:
 *                    type: string
 *                    description: Failed
 */

kidRouter.get("/kids/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await KidModel.find({ _id: id });
    res.status(201).json({ data: product, status: "success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong", status: "error" });
  }
});

/**
 * @swagger
 * /products/kids/add:
 *    post:
 *      summary: add products
 *      tags: [Kids]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Kids'
 *      responses:
 *        200:
 *          description: Data added Successfuly
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                  status:
 *                    type: string
 *                    description: Success
 *        500:
 *          description: Something went wrong
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                  status:
 *                    type: string
 *                    description: Failed
 */

kidRouter.post("/kids/add", async (req, res) => {
  try {
    const product = new KidModel(req.body);
    product.save();
    res
      .status(201)
      .json({ message: "Product added successfully", status: "success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong", status: "error" });
  }
});

/**
 * @swagger
 * /products/kids/{id}:
 *    patch:
 *      summary: update product by id
 *      tags: [Kids]
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: Numeric ID of the product to retrieve.
 *          schema:
 *            type: integer
 *      requestBody:
 *        required: false
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Kids'
 *      responses:
 *        200:
 *          description: Data Updated Successfuly
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                  status:
 *                    type: string
 *                    description: Success
 *        500:
 *          description: Something went wrong
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                  status:
 *                    type: string
 *                    description: Failed
 */

kidRouter.patch("/kids/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await KidModel.findByIdAndUpdate({ _id: id }, req.body);
    res
      .status(201)
      .json({ message: "Data update successfully", status: "success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong", status: "error" });
  }
});

kidRouter.delete("/kids/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await KidModel.findByIdAndDelete({ _id: id });
    res
      .status(201)
      .json({ message: "Data delete successfully", status: "success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong", status: "error" });
  }
});

module.exports = {
  kidRouter,
};
