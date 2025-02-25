const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const { getProfile, updateProfile, uploadProfileImage, deleteAccount, getDashboard } = require("../controllers/userController");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: "./public/uploads/",
  filename: (req, file, cb) => {
    cb(null, req.user.id + path.extname(file.originalname));
  }
});


const User = require("../models/User");

router.get("/api/user", protect, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("username email");
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;

const upload = multer({ storage });

router.get("/profile", protect, getProfile);
router.post("/profile/update", protect, updateProfile);
router.post("/profile/upload", protect, upload.single("profileImage"), uploadProfileImage);
router.post("/profile/delete", protect, deleteAccount);

router.get("/dashboard", protect, getDashboard);

module.exports = router;
