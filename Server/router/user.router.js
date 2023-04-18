const express = require("express");
const userRouter = express();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { UserModel } = require("../models/user.model");

/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      properties:
 *        _id:
 *          type: string
 *          description: The auto-generated id of the user
 *        firstName:
 *          type: string
 *          description: The first name of user
 *        lastName:
 *          type: string
 *          description: The last name of user
 *        email:
 *          type: string
 *          description: The user email
 *        gender:
 *           type: string
 *           description: gender of the user
 *        password:
 *           type: string
 */

/**
 * @swagger
 * tags:
 *  name: User
 *  description: All the API routes related to User
 */

userRouter.get("/", (req, res) => {
  res.send("user login");
});

/**
 * @swagger
 * /user/register:
 *    post:
 *      summary: To register the details of a new user
 *      tags: [User]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      responses:
 *        200:
 *          description: The user was successfully registered
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    description: User register successfully
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
 *                    description: User register successfully
 *                  status:
 *                    type: string
 *                    description: Failed
 */

userRouter.post("/register", async (req, res) => {
  const { firstName, lastName, email, password, gender } = req.body;
  const newuser = await UserModel.find({ email });
  if (newuser.length != 0) {
    res.status(500).json({
      message: "This user is already signup ,Please login",
      status: "error",
    });
    return;
  }
  try {
    bcrypt.hash(password, 6, async (err, hash_pass) => {
      if (err) {
        console.log(err);
        res
          .status(500)
          .json({ message: "Something went wrong", status: "error" });
      } else {
        const user = new UserModel({
          firstName,
          lastName,
          email,
          password: hash_pass,
          gender,
        });
        await user.save();
        res
          .status(201)
          .json({ message: "User register successfully", status: "Success" });
      }
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message, status: "error" });
  }
});

/**
 * @swagger
 * /user/login:
 *    post:
 *      summary: To login the existing user
 *      tags: [User]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *                type: object
 *                properties:
 *                  email:
 *                    type: string
 *                  password:
 *                    type: string
 *      responses:
 *        200:
 *          description: The user was successfully login
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    description: User Login successfully
 *                  status:
 *                    type: string
 *                    description: Success
 *                  token:
 *                    type: string
 *                  data:
 *                    type: object
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

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.find({ email });
    if (user.length > 0) {
      bcrypt.compare(password, user[0].password, async (err, result) => {
        if (!result) {
          console.log(err);
          return res
            .status(500)
            .json({ message: "Wrong Password", status: "error" });
        } else {
          let token = jwt.sign({ userID: user[0]._id }, "hm");
          res.status(201).json({
            message: "User login successfully",
            status: "success",
            token,
            data: user[0],
          });
        }
      });
    } else {
      return res
        .status(500)
        .json({ message: "Please Signup  first", status: "error" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message, status: "error" });
  }
});

userRouter.get("/all-users", async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(201).json({
      status: "success",
      data: users,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Something went wrong", status: "error" });
  }
});

userRouter.get("/all-users/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const users = await UserModel.find({ _id: id });
    res.status(201).json({
      status: "success",
      data: users,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Something went wrong", status: "error" });
  }
});

userRouter.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const users = await UserModel.findByIdAndDelete({ _id: id });
    res.status(201).json({
      status: "success",
      message: "User delted Successfully",
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Something went wrong", status: "error" });
  }
});

userRouter.patch("/update/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const users = await UserModel.findByIdAndUpdate({ _id: id }, req.body);
    res.status(201).json({
      status: "success",
      message: "User data updated Successfully",
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Something went wrong", status: "error" });
  }
});

module.exports = {
  userRouter,
};
