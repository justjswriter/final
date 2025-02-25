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
Install Dependencies
npm install
Create a .env File In the root directory, create a .env file with the following content (update with your own credentials):
PORT=3000
MONGO_URI=your_mongodb_connection_string
SESSION_SECRET=your_session_secret
JWT_SECRET=your_jwt_secret
Run the Application
npm start
Your app should run on http://localhost:3000.
API Documentation

Authentication (Public Endpoints)
POST /register
Registers a new user with an encrypted password.
Body: { username, email, password }
POST /login
Authenticates a user and returns a JWT.
Body: { email, password }
User Management (Private Endpoints)
GET /users/profile
Retrieves the logged-in user's profile.
Headers: Authorization: Bearer <JWT>
PUT /users/profile
Updates the logged-in user's profile (e.g., change email or username).
Headers: Authorization: Bearer <JWT>
Body: { username, email }
Task Management (Private Endpoints)
POST /tasks
Create a new task.
Headers: Authorization: Bearer <JWT>
Body: { title, description, dueDate }
GET /tasks
Retrieve all tasks for the logged-in user.
Headers: Authorization: Bearer <JWT>
GET /tasks/:id
Retrieve a specific task by its ID.
Headers: Authorization: Bearer <JWT>
PUT /tasks/:id
Update a specific task (e.g., mark as completed).
Headers: Authorization: Bearer <JWT>
Body: { title, description, dueDate, status }
DELETE /tasks/:id
Delete a specific task.
Headers: Authorization: Bearer <JWT>
Deployment

This project can be deployed on platforms like Render, Railway, or Replit. For Render:
Push your code to GitHub.
Create a new Web Service on Render.
Configure Build & Start Commands:
Build Command: npm install
Start Command: npm start
Set Environment Variables in Render's Dashboard (matching your .env file).
Deploy the project and test your deployed app.
Advanced Features

Role-Based Access Control (RBAC):
Implement roles such as "admin" and "user".
For example, only admins may delete tasks while regular users can only update their own tasks.
(Implementation details can be extended as needed.)
License

This project is licensed under the MIT License.
Acknowledgements

Express.js Documentation
MongoDB Documentation
Render Deployment Guide
