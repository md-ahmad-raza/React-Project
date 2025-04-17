const loginModel = require("../../models/loginModel");

// ✅ Signup (Insert user)
const bcrypt = require("bcrypt");

const loginInsert = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    const existingUser = await loginModel.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new loginModel({ email, password: hashedPassword, role });
    await newUser.save();

    res
      .status(201)
      .json({ success: true, message: "Signup successful", user: newUser });
  } catch (error) {
    res
      .status(500)
      .json({
        success: false,
        message: "Internal server error",
        error: error.message,
      });
  }
};


// ✅ View all users
const loginView = async (req, res) => {
  try {
    const users = await loginModel.find();
    res
      .status(200)
      .json({ success: true, message: "All login users", data: users });
  } catch (error) {
    res
      .status(500)
      .json({
        success: false,
        message: "Internal server error",
        error: error.message,
      });
  }
};

// ✅ Delete a user
const loginDelete = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await loginModel.findByIdAndDelete(id);

    if (!deletedUser) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    res
      .status(200)
      .json({
        success: true,
        message: "User deleted successfully",
        data: deletedUser,
      });
  } catch (error) {
    res
      .status(500)
      .json({
        success: false,
        message: "Internal server error",
        error: error.message,
      });
  }
};

// ✅ Update a user
const loginUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const { email, password, role } = req.body;

    const updatedUser = await loginModel.findByIdAndUpdate(
      id,
      { email, password, role },
      { new: true }
    );

    if (!updatedUser) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    res
      .status(200)
      .json({
        success: true,
        message: "User updated successfully",
        data: updatedUser,
      });
  } catch (error) {
    res
      .status(500)
      .json({
        success: false,
        message: "Internal server error",
        error: error.message,
      });
  }
};

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await loginModel.findOne({ email: email.trim() });
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password.trim(), user.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid email or password" });
    }

    res.status(200).json({
      success: true,
      message: "Login successful",
      role: user.role,
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};



module.exports = {
  loginInsert,
  userLogin,
  loginView,
  loginDelete,
  loginUpdate,
};
