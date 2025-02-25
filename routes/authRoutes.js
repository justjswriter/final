const express = require("express");
const router = express.Router();
const { register, login, logout } = require("../controllers/authController");
const { validateRegister, validateLogin } = require("../middleware/validate"); 
router.get("/register", (req, res) => res.render("register", { user: null, error: null }));

router.get("/login", (req, res) => res.render("login", { user: null, error: null }));
router.post("/register", validateRegister, register);
router.post("/login", validateLogin, login);
router.get("/logout", logout);

module.exports = router;
