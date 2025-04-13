const express = require("express");
const router = express.Router();
const complaintController = require("../../controllers/web/complainController");

// Route to create a new complaint
router.post("/insert", complaintController.complainInsert);
router.get("/view", complaintController.complainView);
router.delete("/delete/:id", complaintController.complainDelete);
router.put("/update/:id", complaintController.complainUpdate);

module.exports = router;
