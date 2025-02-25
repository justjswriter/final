const Joi = require("joi");

exports.validateRegister = (req, res, next) => {
  const { username, email, password } = req.body;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!passwordRegex.test(password)) {
      console.log("Password validation failed"); 
      return res.render("register", { 
          error: "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character",
          user: { username, email } 
      });
  }

  next(); 
};


exports.validateLogin = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
  });

  const { error } = schema.validate(req.body);
  
  if (error) {
    return res.render("login", { 
      error: error.details[0].message, 
      user: null 
    });
  }

  next();
};

exports.validateTask = (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().allow(""),
    dueDate: Joi.date().optional(),
    status: Joi.string().valid("pending", "completed").optional()
  });

  const { error } = schema.validate(req.body);
  
  if (error) {
    return res.render("tasks", { 
      error: error.details[0].message, 
      user: req.user || null 
    });
  }

  next();
};
