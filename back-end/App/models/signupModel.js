const mongoose = require("mongoose");

const signupSchema = new mongoose.Schema(
  {
    username: String,
    email: String,
    phone: String,
    password: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Signup", signupSchema);
