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

/**
 * @swagger
 * /cart:
 *    get:
 *      summary: get cart data
 *      tags: [Cart]
 *      requestBody:
 *        required: true
 *        description: token is needed (pass it in headers as Authorization)
 *        content:
 *          application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  Authorization:
 *                    description: token
 *      responses:
 *        200:
 *          description: getting cart data successfully
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  data:
 *                    type: object
 *                    $ref: '#/components/schemas/Cart'
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

/**
 * @swagger
 * /cart/add:
 *    post:
 *      summary: Add product to cart
 *      tags: [Cart]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Cart'
 *      responses:
 *        200:
 *          description: Added to Cart Successfully
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

/**
 * @swagger
 * /cart/update/{id}:
 *    patch:
 *      summary: update cart product by id
 *      tags: [Cart]
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
 *              $ref: '#/components/schemas/Cart'
 *      responses:
 *        200:
 *          description: Cart Updated Successfully
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
