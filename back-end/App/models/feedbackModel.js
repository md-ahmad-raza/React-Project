const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const feedbackSchema = new Schema(
  {
    Name: {
      type: String,
    },
    Email: {
      type: String,
    },
    Message: {
      type: String,
    },
  },
  { timestamps: true }
);

const feedbackModel = mongoose.model("Feedback", feedbackSchema);
module.exports = feedbackModel;
