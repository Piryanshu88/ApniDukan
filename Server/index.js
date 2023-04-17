const express = require("express");
const app = express();
const cors = require("cors");
const { connect } = require("./config/db");
const { userRouter } = require("./router/user.router");
const { cartRouter } = require("./router/cart.router");
const { menRouter } = require("./router/men.router");
const { ladiesRouter } = require("./router/ladies.router");
const { DividendRouter } = require("./router/dividend.router");
const { homeRouter } = require("./router/home.router");
const { kidRouter } = require("./router/kids.router");
const { saleRouter } = require("./router/sale.router");
const { sportRouter } = require("./router/sports.router");
const { authenticate } = require("./middlewares/auth.middlewares");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
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
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "HM Api",
      version: "1.0.0",
      description:
        "This is a REST API application made with Express and retriving data from mongodb Atlas",
      contact: {
        name: "Piryanshu Bisht",
        email: "deepubisht2004@gmail.com",
      },
    },
    servers: [
      {
        url: "https://rich-erin-walkingstick-hem.cyclic.app/",
      },
      {
        url: "http://localhost:8080",
      },
    ],
  },
  apis: ["./routes/*.js"],
};
//swagger specs
const swaggerSpec = swaggerJsDoc(options);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

// for all the user routes
app.use("/user", userRouter);

// for all the products Routes
app.use("/products", menRouter);

app.use("/products", ladiesRouter);

app.use("/products", DividendRouter);

app.use("/products", homeRouter);

app.use("/products", kidRouter);

app.use("/products", saleRouter);

app.use("/products", sportRouter);
// for all the cart Routes

app.use("/cart", authenticate, cartRouter);

app.listen(process.env.port, async () => {
  try {
    await connect;
    console.log("connected to db");
  } catch (error) {
    console.log(error);
  }
  console.log("server running at 8080");
});
