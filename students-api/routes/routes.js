// routes/studentRoutes.js
const express = require("express");
const router = express.Router();
const controller = require("../controllers/studentController");

router.get("/", controller.getStudents);
router.post("/", controller.addStudent);
router.put("/:id", controller.updateStudent);
router.delete("/:id", controller.deleteStudent);
router.get("/getStudentById/:id", controller.getStudentById);

module.exports = router;
