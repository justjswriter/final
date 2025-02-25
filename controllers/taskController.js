const Task = require("../models/Task");

exports.createTask = async (req, res, next) => {
  try {
    const { title, description, dueDate } = req.body;
    const task = new Task({
      title,
      description,
      dueDate,
      owner: req.user.id
    });
    await task.save();
    res.redirect("/tasks");
  } catch (error) {
    next(error);
  }
};

exports.getTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find({ owner: req.user.id });
    res.json(tasks);
  } catch (error) {
    next(error);
  }
};

exports.getTaskById = async (req, res, next) => {
  try {
    const task = await Task.findOne({ _id: req.params.id, owner: req.user.id });
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.json(task);
  } catch (error) {
    next(error);
  }
};

exports.updateTask = async (req, res, next) => {
  try {
    const { title, description, status, dueDate } = req.body;
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, owner: req.user.id },
      { title, description, status, dueDate },
      { new: true, runValidators: true }
    );
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.redirect("/tasks");
  } catch (error) {
    next(error);
  }
};

exports.deleteTask = async (req, res, next) => {
  try {
    const task = await Task.findOneAndDelete({ _id: req.params.id, owner: req.user.id });
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.redirect("/tasks");
  } catch (error) {
    next(error);
  }
};
exports.markTaskAsCompleted = async (req, res, next) => {
  try {
    const task = await Task.findOne({ _id: req.params.id, owner: req.user.id });

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    task.status = task.status === "completed" ? "pending" : "completed"; 
    await task.save();

    res.redirect("/tasks");
  } catch (error) {
    next(error);
  }
};
