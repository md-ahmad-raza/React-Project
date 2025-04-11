const mongoose = require("mongoose");
let Schema = mongoose.Schema;

const appointmentSchema = new Schema(
  {
    reason: {
      type: String,
    },
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    date: {
      type: String,
    },
    time: {
      type: String,
    },
  },
  { timestamps: true }
);
let appointmentModel = mongoose.model("appointment", appointmentSchema);
module.exports = appointmentModel;
