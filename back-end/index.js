const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// ✅ Middleware: Increase payload limit to handle base64 image uploads
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// ✅ CORS configuration
app.use(
  cors({
    origin: "http://localhost:5173", // Adjust if your frontend runs on a different port
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// ✅ Import routes
const appointmentRouter = require("./App/routes/web/appointmentRoutes");
const complaintRoutes = require("./App/routes/web/complaintRoutes");
const feedbackRoutes = require("./App/routes/web/feedbackRoutes");
const signupRoutes = require("./App/routes/web/signupRoutes");
const loginRoutes = require("./App/routes/web/loginRoutes");
const addDoctorsRouter = require("./App/routes/web/addDoctorsRoutes");

// ✅ Use routes
app.use("/api/appointment", appointmentRouter);
app.use("/api/complaints", complaintRoutes);
app.use("/api/feedback", feedbackRoutes);
app.use("/api/signup", signupRoutes);
app.use("/api/login", loginRoutes);
app.use("/api/addDoctors", addDoctorsRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});

// ✅ Test route
app.get("/", (req, res) => {
  res.send("Server is running");
});

// ✅ Connect to MongoDB and start server
mongoose
  .connect(process.env.DBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ Connected to MongoDB");

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  });
