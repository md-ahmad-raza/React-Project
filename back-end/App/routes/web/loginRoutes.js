const express = require("express");
const router = express.Router();
const loginController = require("../../controllers/web/loginController");

router.post("/signup", loginController.loginInsert); // for registration
router.post("/login", loginController.userLogin);    // for login
router.get("/view", loginController.loginView);
router.delete("/delete/:id", loginController.loginDelete);
router.put("/update/:id", loginController.loginUpdate);

module.exports = router;
