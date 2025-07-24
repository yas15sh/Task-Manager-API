const express = require("express");
const auth = require("../middleware/auth");
const {
  getTasks,
  createTask,
  updateTask,
  deleteTask
} = require("../controllers/taskController");

const router = express.Router();

router.get("/", auth, getTasks);
router.post("/", auth, createTask);
router.put("/:id", auth, updateTask);
router.delete("/:id", auth, deleteTask);

module.exports = router;