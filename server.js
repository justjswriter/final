const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const path = require("path");
const expressLayouts = require('express-ejs-layouts');
const connectDB = require("./config/db"); 
const userRoutes = require("./routes/userRoutes");
const { errorMiddleware } = require("./utils/errorHandler");

dotenv.config();
connectDB(); 

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static("uploads")); 

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.set('layout', 'layout');

app.use((req, res, next) => {
  res.locals.user = req.user || null;
  next();
});

app.use("/", require("./routes/indexRoutes"));
app.use("/auth", require("./routes/authRoutes"));
app.use("/tasks", require("./routes/taskRoutes"));
app.use("/", userRoutes);

app.get('/', (req, res) => {
  res.render('index');
});

app.use(errorMiddleware);

console.log("🔗 Connecting to MongoDB:", process.env.MONGO_URI);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
