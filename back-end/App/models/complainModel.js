const mongoose = require("mongoose");
let Schema = mongoose.Schema;

const complainSchema = new Schema(
  {
    PatientName: {
      type: String,
      required: true,
    },
    Description: {
      type: String,
      required: true,
    },
    Departments: {
      type: String,
      required: true,
    },
    Date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

let complainModel = mongoose.model("complain", complainSchema);
module.exports = complainModel;
