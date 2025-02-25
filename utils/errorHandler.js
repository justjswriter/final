class ErrorHandler extends Error {
  constructor(message, statusCode) {
      super(message);
      this.statusCode = statusCode;
      Error.captureStackTrace(this, this.constructor);
  }
}
const errorHandler = (err, req, res, next) => {
  console.error("Error:", err);

  const statusCode = err.status || 401;
  const message = err.message || "Internal Server Error";

  if (req.headers.accept?.includes("application/json")) {
    return res.status(statusCode).json({ error: message });
  } else {
    return res.status(statusCode).render("error", { error: message });
  }
};

module.exports = errorHandler;


const errorMiddleware = (err, req, res, next) => {
  const statusCode = err.statusCode || 401;
  const message = err.message || "Internal Server Error";

  if (req.headers.accept && req.headers.accept.includes("text/html")) {
      res.status(statusCode).render("error", { message, statusCode });
  } else {
      res.status(statusCode).json({ success: false, message });
  }
};


module.exports = { ErrorHandler, errorMiddleware };

