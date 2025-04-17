const express = require("express");
const router = express.Router();
const loginController = require("../../controllers/web/loginController");

router.post("/signup", loginController.loginInsert); // Signup
router.post("/login", loginController.userLogin);    // Login
router.get("/view", loginController.loginView);
router.delete("/delete/:id", loginController.loginDelete);
router.put("/update/:id", loginController.loginUpdate);

module.exports = router;
