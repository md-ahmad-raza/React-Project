const Doctor = require("../../models/AddDoctorsModel"); // ✅ Correct model import

const DoctorsInsert = (req, res) => {
  const { DoctorName, Degree, Experience, About, Image } = req.body;

  if (!DoctorName || !Degree || !Experience || !About || !Image) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newDoctor = { DoctorName, Degree, Experience, About, Image };

  Doctor.create(newDoctor)
    .then((doctor) => {
      res.status(201).json({ message: "Doctor added successfully", doctor });
    })
    .catch((error) => {
      res.status(500).json({ message: "Error adding doctor", error });
    });
};

const DoctorView = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.status(200).json({
      message: "All doctors retrieved successfully",
      doctors: doctors, // Change "data" to "doctors"
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching doctors",
      error: error.message,
    });
  }
};

const deleteDoctors = async (req, res) => {
  try {
    const { id } = req.params;
    const doctor = await Doctor.findByIdAndDelete(id);

    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }

    res.status(200).json({
      message: "Doctor deleted successfully",
      data: doctor,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting doctor",
      error: error.message,
    });
  }
};

const updateDoctors = async (req, res) => {
  try {
    const { id } = req.params;
    const { DoctorName, Degree, Experience, About, Image } = req.body;

    const updatedDoctor = await Doctor.findByIdAndUpdate(
      id,
      { DoctorName, Degree, Experience, About, Image },
      { new: true }
    );

    if (!updatedDoctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }

    res.status(200).json({
      message: "Doctor updated successfully",
      data: updatedDoctor,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating doctor",
      error: error.message,
    });
  }
};

module.exports = {
  DoctorsInsert,
  DoctorView,
  deleteDoctors,
  updateDoctors,
};
