const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, trim: true },
  email: { 
    type: String, 
    required: true, 
    unique: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ 
  },
  password: { type: String, required: true },
  profileImage: { type: String, default: "/uploads/default.jpg" }, 
  role: { type: String, enum: ["user", "admin"], default: "user" }
}, { timestamps: true });


module.exports = mongoose.model("User", UserSchema);
