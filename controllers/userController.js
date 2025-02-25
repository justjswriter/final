const User = require("../models/User");
const jwt = require("jsonwebtoken");

exports.getProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.render("profile", { user });
  } catch (error) {
    next(error);
  }
};

exports.getDashboard = async (req, res) => {
  try {
    console.log("req.user в getDashboard:", req.user);
    const userId = req.user ? req.user.id : null;

    if (!userId) {
      return res.redirect("/auth/login");
    }

    const user = await User.findById(userId).select("username");

    if (!user) {
      return res.redirect("/auth/login");
    }

    res.render("dashboard", { user }); 
  } catch (error) {
    console.error("Error loading dashboard:", error);
    res.status(500).send("Server Error");
  }
};


exports.updateProfile = async (req, res, next) => {
  try {
    const { username, email } = req.body;
    
    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      { username, email },
      { new: true, runValidators: true }
    ).select("-password");

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    const token = jwt.sign(
      { id: updatedUser._id, username: updatedUser.username, role: updatedUser.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
    });

    res.redirect("/profile"); 

  } catch (error) {
    console.error("Profile updating error:", error);
    res.status(500).send("server error");
  }
};



exports.uploadProfileImage = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).send("User not found");

    if (req.file) {
      user.profileImage = "/uploads/" + req.file.filename;
      await user.save();
    }

    res.redirect("/profile");
  } catch (error) {
    next(error);
  }
};

exports.deleteAccount = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).send("User not found");

    await User.findByIdAndDelete(req.user.id);
    res.clearCookie("token");
    res.redirect("/");
  } catch (error) {
    next(error);
  }
};
