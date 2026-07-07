# Job Tracker Application

A full-stack web application that helps users manage and track their job applications. The application provides secure user authentication and allows users to create, view, update, and manage their job application records through an intuitive interface.

## Features

### User Management

* User registration
* User login
* JWT-based authentication
* Secure API access using JWT tokens
* Logout functionality

### Job Application Management

* View all job applications
* Add new job applications
* Edit existing applications
* Track application status
* Manage application details through a user-friendly interface

### Security

* JWT authentication
* HTTP interceptor for attaching JWT tokens to API requests
* Route protection using Angular Auth Guards
* Secured backend endpoints

### Backend Features

* RESTful API development using Spring Boot
* Layered architecture (Controller, Service, Repository)
* DTO-based request and response handling
* Centralized exception handling
* Database integration using JPA/Hibernate

---

## Technology Stack

### Backend

* Java 17
* Spring Boot 4.0.6
* Spring Data JPA
* Spring Security
* JWT Authentication
* REST APIs
* Hibernate

### Frontend

* Angular 22.0.4
* TypeScript
* HTML5
* CSS3
* Bootstrap

### Database

* PostgreSQL

### Tools

* Git & GitHub
* Maven
* Postman
* Visual Studio Code / IntelliJ IDEA

---

## Application Architecture

The application follows a standard full-stack architecture:

```
Angular Frontend
        |
        | HTTP Requests (JWT Token)
        |
Spring Boot REST APIs
        |
        |
Service Layer
        |
Repository Layer
        |
        |
PostgreSQL Database
```

---

## Repository Structure

This project follows a monorepo structure containing frontend, backend, and database scripts.

```
JobTracker/
│
├── frontend/
│   └── Angular application
│
├── backend/
│   └── Spring Boot application
│
└── database/
    └── queries.sql
```

---

## Authentication Flow

1. User registers through the Angular application.
2. User logs in using username and password.
3. Backend validates credentials.
4. A JWT token is generated and returned.
5. Angular stores the token.
6. HTTP interceptor automatically attaches the JWT token to subsequent API requests.
7. Spring Security validates the token before allowing access to protected resources.

---

## Backend Implementation

### DTO Pattern

DTOs are used to separate API models from database entities.

Benefits:

* Prevents exposing database entities directly
* Provides better control over request and response data
* Improves maintainability

Example flow:

```
Request DTO
     |
Controller
     |
Service
     |
Entity
     |
Database
```

---

### Exception Handling

The application implements centralized exception handling using:

* `@RestControllerAdvice`
* `@ExceptionHandler`

Handled scenarios include:

* Resource not found exceptions
* Validation errors
* Authentication failures
* Generic application exceptions

This ensures consistent error responses across APIs.

---

## Database

Database scripts are maintained separately inside the repository.

The SQL file contains:

* Database schema creation
* Table definitions
* Required database queries

---

## Screenshots

### Login Page

<img width="1407" height="758" alt="Screenshot 2026-07-07 at 6 56 51 pm" src="https://github.com/user-attachments/assets/f24bf60c-eb09-44cb-89eb-bdbae7d5d362" />


### Registration Page

<img width="1407" height="758" alt="Screenshot 2026-07-07 at 6 56 21 pm" src="https://github.com/user-attachments/assets/93e5b39a-64af-495b-8054-deec9d0ef0ac" />


### Job Applications Dashboard

<img width="1407" height="758" alt="Screenshot 2026-07-07 at 7 06 30 pm" src="https://github.com/user-attachments/assets/b4d11bc7-b470-4ddf-90c7-21cfb1a37a80" />


### Add/Edit Application Modal

<img width="1407" height="758" alt="Screenshot 2026-07-07 at 9 15 03 pm" src="https://github.com/user-attachments/assets/96d51b4e-a344-4809-8b81-c4415ab6c4f2" />


---

## Running the Application Locally

### Backend Setup

1. Clone the repository

```bash
git clone https://github.com/rutuja1302/job-application-tracker.git
```

2. Navigate to backend folder

```bash
cd backend/tracker
```

3. Configure database properties in:

```
application.properties
```

4. Run Spring Boot application:

```bash
mvn spring-boot:run
```

---

### Frontend Setup

Navigate to frontend folder:

```bash
cd frontend/job-tracker-ui
```

Install dependencies:

```bash
npm install
```

Run Angular application:

```bash
ng serve
```

Application will run on:

```
http://localhost:4200
```

---

## Future Enhancements

* Admin dashboard
* Job search insights
* Application analytics
* Resume management
* Deployment using CI/CD pipeline

---

## Author

Rutuja Mhatre

Java Full Stack Developer
