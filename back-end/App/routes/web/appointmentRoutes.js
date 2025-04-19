const express = require("express");
const router = express.Router();
const appointmentController = require("../../controllers/web/appointmentController");

// POST /api/appointment/insert
router.post("/insert", appointmentController.appointmentInsert);

// GET /api/appointment/view
router.get("/view", appointmentController.appointmentList);

// DELETE /api/appointment/delete/:id
router.delete("/delete/:id", appointmentController.appointmentDelete);

// PUT /api/appointment/update/:id
router.put("/update/:id", appointmentController.appointmentUpdate);

module.exports = router;
