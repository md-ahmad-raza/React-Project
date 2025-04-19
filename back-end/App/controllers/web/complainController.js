const Complain = require("../../models/complainModel");

// Insert new Complaint
let complainInsert = async (req, res) => {
  try {
    const { PatientName, Description, Departments } = req.body;
    const complain = new Complain({
      PatientName,
      Description,
      Departments,
    });
    await complain.save();
    res.status(201).json({ message: "Complaint registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error registering complaint", error });
  }
};

// View all Complaints
let complainView = async (req, res) => {
  try {
    const complaints = await Complain.find();
    res.status(200).json({ data: complaints });
  } catch (error) {
    res.status(500).json({ message: "Error fetching complaints", error });
  }
};

// Delete a Complaint
let complainDelete = async (req, res) => {
  try {
    const { id } = req.params;
    await Complain.findByIdAndDelete(id);
    res.status(200).json({ message: "Complaint deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting complaint", error });
  }
};
// Update a Complaint
let complainUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const { PatientName, Description, Departments } = req.body;
    const updatedComplaint = await Complain.findByIdAndUpdate(
      id,
      { PatientName, Description, Departments },
      { new: true }
    );
    res.status(200).json({ message: "Complaint updated successfully", data: updatedComplaint });
  } catch (error) {
    res.status(500).json({ message: "Error updating complaint", error });
  }
}

module.exports = {
  complainInsert,
  complainView,
  complainDelete,
  complainUpdate
};
