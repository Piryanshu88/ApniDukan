const mongoose = require("mongoose");

const reqString = { type: String, required: true };

const userSchema = mongoose.Schema({
  firstName: { type: String, default: "" },
  lastName: { type: String, default: "" },
  email: reqString,
  gender: { type: String, default: "" },
  password: reqString,
});

const UserModel = mongoose.model("user", userSchema);

module.exports = {
  UserModel,
};
