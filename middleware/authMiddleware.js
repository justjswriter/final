const jwt = require("jsonwebtoken");
const { isBlacklisted } = require("../utils/blacklist");

exports.protect = (req, res, next) => {
  const token = req.cookies?.token;
  if (!token || isBlacklisted(token)) {
    return res.redirect("/auth/login");
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    res.locals.user = req.user; 
    next();
  } catch (err) {
    return res.redirect("/auth/login");
  }
};

exports.authMiddleware = (req, res, next) => {
  if (!req.user) {
    console.log("User is not authenticated");
    return res.redirect("/auth/login");
  }
  console.log("Authenticated user:", req.user);
  next();
};
