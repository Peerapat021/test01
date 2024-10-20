const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");

// ตั้งค่าเส้นทาง (routes)
router.get("/", studentController.getAllStudents);
router.post("/", studentController.addStudent);

module.exports = router;
