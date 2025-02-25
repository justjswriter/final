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

task-manager/ ├── config/ # Configuration files (database, environment variables) ├── controllers/ # Business logic (auth, tasks) ├── middleware/ # Middleware (authentication, validation) ├── models/ # MongoDB models (User, Task) ├── routes/ # Express routes (auth, tasks) ├── views/ # EJS templates (HTML pages) ├── public/ # Static files (CSS, images, client-side JS) ├── .env # Environment variables (not pushed to GitHub) ├── package.json # Project metadata and dependencies └── README.md # Project documentation
