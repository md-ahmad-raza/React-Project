const Signup = require("../../models/signupModel"); // Correct model import

let signupInsert = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;
    const user = new Signup({ username, email, phone, password });
    await user.save();
    res.status(201).json({
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

let signupView = async (req, res) => {
  try {
    const users = await Signup.find().sort({ createdAt: -1 }); // Sorts users by newest first
    if (!users || users.length === 0) {
      return res.status(404).json({
        message: "No users found",
        data: [],
      });
    }
    res.status(200).json({
      message: "All User lists",
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

let signupDelete = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Signup.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    res.status(200).json({
      message: "User deleted successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};
let signupUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, email, phone, password } = req.body;
    const user = await Signup.findByIdAndUpdate(
      id,
      { username, email, phone, password },
      { new: true }
    );
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    res.status(200).json({
      message: "User updated successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

module.exports = {
  signupInsert,
  signupView,
  signupDelete,
  signupUpdate,
};
