const mongoose = require("mongoose");

const reqString = { type: String, required: true };

const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: reqString,
  gender: String,
  password: reqString,
});

const UserModel = mongoose.model("user", userSchema);

module.exports = {
  UserModel,
};
