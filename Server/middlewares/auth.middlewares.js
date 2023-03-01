const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, "hm", (err, decoded) => {
      if (decoded) {
        const userID = decoded.userID;
        // console.log(decoded);
        req.body.authorID = userID;
        next();
      } else {
        res
          .status(500)
          .json({ message: "Please login  first", status: "error" });
      }
    });
  } else {
    res.status(500).json({ message: "Please login  first", status: "error" });
  }
};
module.exports = {
  authenticate,
};
