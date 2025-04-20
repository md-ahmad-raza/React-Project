const express = require("express");
const router = express.Router();
const signupController = require("../../controllers/web/signupController");

router.post("/insert", signupController.signupInsert);
router.get("/view", signupController.signupView);
router.delete("/delete/:id", signupController.signupDelete);
router.put("/update/:id", signupController.signupUpdate);
// Example Express Route

module.exports = router;
