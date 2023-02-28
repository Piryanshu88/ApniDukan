const express = require("express");
const userRouter = express();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { UserModel } = require("../models/user.model");

userRouter.get("/", (req, res) => {
  res.send("user login");
});

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
