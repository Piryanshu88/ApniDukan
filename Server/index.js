const express = require("express");
const app = express();
require("dotenv").config();
app.get("/", (req, res) => {
  res.send("This is the home page ");
});

app.listen(process.env.port, () => {
  console.log("Server running at 8080");
});
