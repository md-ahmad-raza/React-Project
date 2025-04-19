const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["admin", "user"], default: "user" },
});

const loginModel = mongoose.model("login", loginSchema);
module.exports = loginModel;
