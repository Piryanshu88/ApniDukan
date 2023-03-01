const express = require("express");
const app = express();
const cors = require("cors");
const { connect } = require("./config/db");
const { userRouter } = require("./router/user.router");
const { cartRouter } = require("./router/cart.router");
const { menRouter } = require("./router/men.router");
const { ladiesRouter } = require("./router/ladies.router");
const { DividendRouter } = require("./router/dividend.router");
require("dotenv").config();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
app.get("/", (req, res) => {
  res.send("This is the home page of HM clone ");
});
// for all the user routes
app.use("/user", userRouter);

// for all the products Routes
app.use("/products", menRouter);

app.use("/products", ladiesRouter);

app.use("/products", DividendRouter);

// for all the cart Routes
app.use("/cart", cartRouter);

app.listen(process.env.port, async () => {
  try {
    await connect;
    console.log("connected to db");
  } catch (error) {
    console.log(error);
  }
  console.log("server running at 8080");
});
