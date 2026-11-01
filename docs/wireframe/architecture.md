
# System Architecture

## Architecture Overview

The Yakunex Technologies Company Portfolio Website uses a frontend-backend architecture.

The frontend is developed using React, Vite, and Tailwind CSS. The backend is developed using Laravel and provides API endpoints for communication with the frontend. MySQL is used to store contact enquiries and related information.

## Main Components

### 1. Frontend
Technologies: React, Vite, Tailwind CSS

Responsibilities:
- Display the public website pages.
- Handle navigation and user interactions.
- Display company information, services, projects, and articles.
- Collect contact form information.
- Communicate with the Laravel API.
- Provide the administrator interface.

### 2. Backend
Technologies: Laravel, PHP

Responsibilities:
- Receive contact form submissions.
- Validate submitted information.
- Store enquiries in the database.
- Handle administrator authentication.
- Retrieve and manage enquiries.
- Update enquiry statuses.
- Send email notifications for supported status updates.

### 3. Database
Technology: MySQL

The database stores contact enquiry information and the data required by the administrator area.

## Application Workflow

1. A visitor opens the React website.
2. The visitor browses the available pages.
3. The visitor submits the contact form.
4. React sends the form data to the Laravel API.
5. Laravel validates the data and stores the enquiry in MySQL.
6. The administrator logs in and views submitted enquiries.
7. The administrator can update an enquiry status or delete an enquiry.
8. When a supported status update occurs, the system sends an email notification.

## Local Development Configuration

Frontend API base URL:
http://127.0.0.1:8000/api

Backend:
Laravel development server.

Database:
MySQL through XAMPP.

Note: Actual environment variables and credentials are stored locally and are not included in this document.
