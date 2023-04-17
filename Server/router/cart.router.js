const express = require("express");
const { CartModel } = require("../models/cart.model");
const cartRouter = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    Cart:
 *      type: object
 *      properties:
 *        _id:
 *          type: string
 *          description: The auto-generated id of the product
 *        code:
 *          type: string
 *          description: A unique code of the product
 *        description:
 *          type: string
 *          description: flipkart url for the product
 *        name:
 *          type: string
 *          description: name of the product
 *        sapProductName:
 *          type: string
 *        color:
 *          type: object
 *          description: different color options for a product
 *        whitePrice:
 *          type: object
 *        importedBy:
 *          type: string
 *        importedDate:
 *          type: string
 *        netQuantity:
 *          type: string
 *        countryOfProduction:
 *          type: string
 *        productTypeName:
 *          type: string
 *        fits:
 *          type: string
 *        constructionDescr:
 *          type: string
 *        customerGroup:
 *          type: string
 *        rootCategoryPath:
 *          type: string
 *        productKey:
 *          type: string
 *        productCountryOfProduction:
 *          type: string
 *        yearOfProduction:
 *          type: string
 *        showGarmentsInfo:
 *          type: boolean
 *        authorID:
 *            type: string
 *            description: id of the user who add this product in the cart
 *        quantity:
 *            type: integer
 *            description: default quantity will be 1
 */

/**
 * @swagger
 * tags:
 *  name: Cart
 *  description: All the API routes related to Cart
 */

cartRouter.get("/", async (req, res) => {
  try {
    const cart = await CartModel.find({ authorID: req.body.authorID });
    const cartLength = await CartModel.find({
      authorID: req.body.authorID,
    }).count();
    res
      .status(201)
      .send({ data: cart, status: "success", totalCount: cartLength });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong", status: "error" });
  }
});

cartRouter.post("/add", async (req, res) => {
  try {
    const cart = new CartModel(req.body);
    cart.save();
    res
      .status(201)
      .json({ message: "product added to cart", status: "success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong", status: "error" });
  }
});

cartRouter.patch("/update/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const cart = await CartModel.findByIdAndUpdate({ _id: id }, req.body);
    res
      .status(201)
      .json({ message: "Cart Update successfull", status: "Success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong", status: "Failed" });
  }
});

cartRouter.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const cart = await CartModel.findByIdAndDelete({ _id: id });
    res
      .status(201)
      .json({ message: "Cart item deleted successfully", status: "Success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong", status: "Failed" });
  }
});
// for checkout
cartRouter.delete("/checkout", async (req, res) => {
  try {
    const cart = await CartModel.deleteMany({ authorID: req.body.authorID });
    res
      .status(201)
      .json({ message: "Cart item deleted successfully", status: "Success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong", status: "Failed" });
  }
});
module.exports = {
  cartRouter,
};
