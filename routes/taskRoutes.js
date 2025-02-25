const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const Task = require("../models/Task");

router.get("/", protect, async (req, res) => {
  try {
    const tasks = await Task.find({ owner: req.user.id });
    res.render("tasks", { user: req.user, tasks });
  } catch (error) {
    next(error);
  }
});
const { markTaskAsCompleted } = require("../controllers/taskController");

router.post("/complete/:id", protect, markTaskAsCompleted);

router.post("/add", protect, require("../controllers/taskController").createTask);
router.post("/update/:id", protect, require("../controllers/taskController").updateTask);
router.post("/delete/:id", protect, require("../controllers/taskController").deleteTask);

module.exports = router;
