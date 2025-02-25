const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");

router.get("/", (req, res) => {
  res.render("index", { user: req.user || null });
});

router.get("/dashboard", protect, (req, res) => {
  res.render("dashboard", { user: req.user });
});

module.exports = router;
