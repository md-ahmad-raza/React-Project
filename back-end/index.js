const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

// Middleware hai
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173", // Allow frontend
    methods: "GET,POST,PUT,DELETE", // Allow these HTTP methods
    credentials: true, // Allow cookies (if needed)
  })
); //cors ko use kiya

// Import routes
const appointmentRouter = require("./App/routes/web/appointmentRoutes");
const complaintController = require("./App/routes/web/complaintRoutes");
app.use("/api/appointment", appointmentRouter);
app.use("/api/complaints", complaintController);

// Basic route for testing
app.get("/", (req, res) => {
  res.send("Server is running");
});

// connect to MongoDB and start server
mongoose
  .connect(process.env.DBURL)
  .then(() => {
    console.log("Connected to MongoDB");
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1);
  });
