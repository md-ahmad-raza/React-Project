const loginModel = require("../../../models/loginModel");

// Signup (Insert user)
let loginInsert = async (req, res) => {
  try {
    const { username, phone, email, password } = req.body;

    // Check if user already exists
    const existingUser = await loginModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "Email already registered",
      });
    }

    const newLogin = new loginModel({
      username,
      phone,
      email,
      password,
    });

    await newLogin.save();

    res.status(201).json({
      message: "Signup successful",
      data: newLogin,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

// Login (Check email and password)
let userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await loginModel.findOne({ email, password });

    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    res.status(200).json({
      message: "Login successful",
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

let loginView = async (req, res) => {
  try {
    const login = await loginModel.find();
    res.status(200).json({
      message: "All login users",
      data: login,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

let loginDelete = async (req, res) => {
  try {
    const { id } = req.params;
    const login = await loginModel.findByIdAndDelete(id);
    if (!login) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    res.status(200).json({
      message: "User deleted successfully",
      data: login,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

let loginUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const { email, password } = req.body;

    const login = await loginModel.findByIdAndUpdate(
      id,
      { email, password },
      { new: true }
    );

    if (!login) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json({
      message: "User updated successfully",
      data: login,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

module.exports = {
  loginInsert,   // Signup
  userLogin,     // Login
  loginView,
  loginDelete,
  loginUpdate,
};
