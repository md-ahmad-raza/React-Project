// App/models/Doctor.js
const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  DoctorName: { type: String, required: true },
  Degree: { type: String, required: true },
  Experience: { type: String, required: true },
  About: { type: String, required: true },
  Image: { type: String, required: true },
});

const Doctor = mongoose.model("Doctor", doctorSchema);
module.exports = Doctor;
