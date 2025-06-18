# Employee Management System

A full-stack web application to manage employee records — built using **React.js** on the frontend and **Spring Boot** on the backend, with **MySQL** as the database. It supports user registration, login, and complete CRUD operations on employee data, all with a clean UI and proper form validation.

---

##  Features

-  User Registration and Login
-  Manage employee profiles with Create, Read, Update, Delete (CRUD)
-  Conditional navigation based on login status
-  Form validation using Bootstrap
-  RESTful API built with Spring Boot
-  MySQL database integration for persistent data
-  Confirmation dialog before deletion

---

## Technologies Used

**Frontend:**
- React.js (Vite)
- Axios
- React Router DOM
- Bootstrap 5

**Backend:**
- Spring Boot
- Spring Data JPA
- Spring Web
- MySQL

---

##  Project Structure

employee_management_system/
├── backend/
│ ├── src/main/java/com/employee/
│ ├── src/main/resources/
│ └── pom.xml
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── styles/
│ │ └── App.jsx
│ ├── public/
│ └── package.json

##  Setup Instructions

###  Backend (Spring Boot)

1. Navigate to the `backend` folder  
2. Run the application using: ```bash ./mvnw spring-boot:run
3. Make sure MySQL is installed and running
4. Configure application.properties for your database
5. App runs at: http://localhost:8081

### Frontend (React)
1)Navigate to frontend folder
2)Run: npm install
3)Run: npm run dev
4)Runs on: http://localhost:5173

## Live Demo
https://employee-management-system-68mn-blib6afoj.vercel.app

## Conclusion
This project demonstrates the integration of a modern frontend framework with a robust backend to manage employee data effectively. It is a scalable and maintainable solution for small to medium enterprises looking to digitize their employee records.

## Author
**UdayChendan Marapaka**
GitHub: [https://github.com/MarapakaUdayChendan]
