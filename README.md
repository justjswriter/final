# Task Manager Project

A simple task management application built with Node.js, Express, and MongoDB. This project lets users register, log in, and manage tasks. It follows a modular structure and implements secure authentication using JWT and bcrypt.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [API Documentation](#api-documentation)
- [Deployment](#deployment)
- [Advanced Features](#advanced-features)
- [License](#license)

## Project Overview
This Task Manager app allows users to:
- Register and log in securely
- View and update their user profile
- Create, update, and delete tasks (resources)
- Manage tasks with deadlines and completion status

The project is structured modularly with separate files for routes, models, controllers, middleware, and configurations.

## Features
- **User Authentication**: Register and log in with encrypted passwords.
- **JWT-Based Security**: Secure endpoints with JSON Web Tokens.
- **User Profile Management**: Retrieve and update user details.
- **Task Management**: Create, read, update, and delete tasks.
- **Validation & Error Handling**: Uses middleware for validation and global error handling.
- **Role-Based Access Control (RBAC)**: (Optional) Different access levels for roles like "admin" and "user".
- **Deployment Ready**: Deployed on Render with environment variables for sensitive information.

## Technologies Used
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT, bcrypt
- **Templating**: EJS
- **Deployment**: Render (or similar platforms)
- **Validation**: Joi (or Validator.js) for incoming data

## Project Structure

final/
├── config/              # Configuration files (database connection, environment variables)
│   ├── db.js           # MongoDB connection setup
│
├── controllers/         # Business logic (handling API requests)
│   ├── authController.js  # Authentication logic (register, login)
│   ├── taskController.js  # Task management logic
│   ├── userController.js  # User profile management
│
├── middleware/          # Middleware (authentication, validation, error handling)
│   ├── authMiddleware.js  # Protects private routes using JWT
│   ├── validation.js      # Request validation using Joi or Validator.js
│
├── models/              # Mongoose models (database schemas)
│   ├── User.js         # User model (username, email, password)
│   ├── Task.js         # Task model (title, description, status, due date)
│
├── routes/              # Express routes
│   ├── authRoutes.js   # Routes for login/register
│   ├── taskRoutes.js   # Routes for task CRUD operations
│   ├── userRoutes.js   # Routes for user profile management
│   ├── indexRoutes.js  # Centralized router 
│
├── views/               # EJS templates for rendering UI
│   ├── layout.ejs      # Main layout template
│   ├── navbar.ejs      # Navigation bar (partial)
│   ├── index.ejs       # Home page
│   ├── login.ejs       # Login page
│   ├── register.ejs    # Register page
│   ├── dashboard.ejs   # User dashboard
│   ├── profile.ejs     # User profile page
│   ├── tasks.ejs       # Task management page
│   ├── error.ejs       # Error handling page
│
├── public/              # Static files (CSS, JS, Images)
│   ├── css/           # Stylesheets
│   │   ├── styles.css  # Main CSS file
│   ├── uploads/        # Static images (profile pictures, icons)
│
├── .env                 # Environment variables 
├── server.js            # Main entry point of the application
├── package.json         # Project metadata and dependencies
├── README.md            # Documentation for setup, API usage, and deployment




## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/justjswriter/final.git
   cd final
2️⃣ Install Dependencies
npm install

3️⃣ Create a .env File
Create a .env file in the root directory and add the following:
PORT=3000
MONGO_URI=your_mongodb_connection_string
SESSION_SECRET=your_session_secret
JWT_SECRET=your_jwt_secret

4️⃣ Run the Application
npm start
Your app should now be running at http://localhost:3000 🚀
📌 API Documentation

🔐 Authentication Routes (Public)
Method	Route	Description
POST	/register	Registers a new user (encrypts password).
POST	/login	Authenticates user and returns a JWT token.
🔒 User Routes (Private)
Method	Route	Description
GET	/users/profile	Get logged-in user's profile.
PUT	/users/profile	Update profile (username, email).
📋 Task Routes (Private)
Method	Route	Description
POST	/tasks	Create a new task.
GET	/tasks	Get all tasks for the logged-in user.
GET	/tasks/:id	Get a specific task by ID.
PUT	/tasks/:id	Update a task (mark as completed, edit).
DELETE	/tasks/:id	Delete a task.
Each private route requires a JWT in the Authorization header:
Authorization: Bearer <your_token>
🚀 Deployment

1️⃣ Push to GitHub
git add .
git commit -m "Initial commit"
git push origin main
2️⃣ Deploy on Render
Go to Render
Click "New Web Service"
Select your GitHub repository
Set Build Command → npm install
Set Start Command → npm start
Add Environment Variables from .env
Click Deploy
After deployment, access your app at:
🔗 [https://your-app.onrender.com](https://final-dgsn.onrender.com)
🔐 Security

✔️ JWT Authentication for secure user login
✔️ bcrypt for password hashing before storing in MongoDB
✔️ Environment Variables to hide sensitive credentials
🎯 Advanced Features

✅ Add Admin Dashboard
✅ Implement Task Filtering & Sorting
✅ Add Notifications for Task Deadlines
📝 License

This project is licensed under the MIT License.
