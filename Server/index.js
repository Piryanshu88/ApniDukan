const express = require("express");
const app = express();
require("dotenv").config();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("This is the home page of HM clone ");
});

app.listen(process.env.port, () => {
  console.log("Server running at 8080");
});
