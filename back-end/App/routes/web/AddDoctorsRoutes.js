// App/routes/web/addDoctorsRoutes.js
const express = require("express");
const router = express.Router();

const AddDoctorsController = require("../../controllers/web/AddDoctorsController");

router.post("/insert", AddDoctorsController.DoctorsInsert);
router.get("/view", AddDoctorsController.DoctorView);
router.delete("/delete/:id", AddDoctorsController.deleteDoctors);
router.put("/update/:id", AddDoctorsController.updateDoctors);

module.exports = router;
