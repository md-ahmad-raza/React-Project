// Importing the Feedback model
const Feedback = require("../../models/feedbackModel");

// Feedback insert
let feedbackInsert = async (req, res) => {
  try {
    const { Name, Email, Message } = req.body; // Correct field names
    const feedback = new Feedback({
      Name,
      Email,
      Message,
    });
    await feedback.save();
    res.status(201).json({ message: "Feedback registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error registering feedback", error });
  }
};

// Feedback view
let feedbackView = async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    res.status(200).json({ data: feedbacks });
  } catch (error) {
    res.status(500).json({ message: "Error fetching feedbacks", error });
  }
};

// Feedback delete
let feedbackDelete = async (req, res) => {
  try {
    const { id } = req.params;
    await Feedback.findByIdAndDelete(id);
    res.status(200).json({ message: "Feedback deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting feedback", error });
  }
};

// Feedback update
let feedbackUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const { Name, Email, Message } = req.body; // Correct field names
    const updatedFeedback = await Feedback.findByIdAndUpdate(
      id,
      { Name, Email, Message },
      { new: true }
    );
    res.status(200).json({ message: "Feedback updated successfully", data: updatedFeedback });
  } catch (error) {
    res.status(500).json({ message: "Error updating feedback", error });
  }
};

// Exporting the functions
module.exports = {
  feedbackInsert,
  feedbackView,
  feedbackDelete,
  feedbackUpdate
};
