const bcrypt = require("bcryptjs");
const Signup = require("../../models/signupModel"); // Correct model import

// INSERT
let signupInsert = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;

    // Check if user with email already exists
    const existingUser = await Signup.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user
    const user = new Signup({ username, email, phone, password: hashedPassword });
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

// VIEW
let signupView = async (req, res) => {
  try {
    const users = await Signup.find().sort({ createdAt: -1 });
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

// DELETE
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

// UPDATE
let signupUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, email, phone, password } = req.body;

    // Hash the new password if provided
    const updatedFields = { username, email, phone };
    if (password) {
      updatedFields.password = await bcrypt.hash(password, 10);
    }

    const user = await Signup.findByIdAndUpdate(id, updatedFields, { new: true });
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
