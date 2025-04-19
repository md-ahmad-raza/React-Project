const Appointment = require("../../models/appointmentModel");

// Insert new appointment
let appointmentInsert = async (req, res) => {
  try {
    const data = req.body;
    const appointment = new Appointment(data);
    await appointment.save();
    res.status(200).json({
      message: "Appointment inserted successfully",
      data: appointment,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

// Get list of appointments
let appointmentList = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).json({
      message: "Appointment List",
      data: appointments,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

// Delete an appointment
let appointmentDelete = async (req, res) => {
  try {
    const appointmentId = req.params.id;
    const appointment = await Appointment.findByIdAndDelete(appointmentId);

    if (!appointment) {
      return res.status(404).json({ message: "Appointment not found" });
    }

    res.status(200).json({
      message: "Appointment deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

// Update an existing appointment
let appointmentUpdate = async (req, res) => {
  try {
    const appointmentId = req.params.id;
    const updatedData = req.body;

    const updatedAppointment = await Appointment.findByIdAndUpdate(
      appointmentId,
      updatedData,
      { new: true }
    );

    if (!updatedAppointment) {
      return res.status(404).json({ message: "Appointment not found" });
    }

    res.status(200).json({
      message: "Appointment updated successfully",
      data: updatedAppointment,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

module.exports = {
  appointmentInsert,
  appointmentList,
  appointmentDelete,
  appointmentUpdate,
};
