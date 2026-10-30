# Yakunex Technologies — Company Portfolio Website

A modern, responsive company portfolio website developed for **Yakunex Technologies (Pvt) Ltd** as an individual software development assessment project. The website introduces the company, presents its services and project examples, shares technology-related articles, and allows visitors to submit enquiries through a contact form. It also includes an admin dashboard for managing submitted enquiries.

## What's Inside

- **React + Vite** — frontend development with a fast development server.
- **Tailwind CSS** — responsive layouts and modern styling.
- **JavaScript** — interactive website functionality.
- **Laravel** — backend development and REST API.
- **MySQL** — database for storing contact enquiries and related information.
- **Admin Authentication** — protected admin login and dashboard.
- **Cinematic Welcome Animation** — animated introduction before displaying the home page.
- **Responsive Design** — layouts designed for desktop, tablet, and mobile screens.

## Main Features

- **Home Page** — company introduction, welcome animation, and overview.
- **Projects Page** — displays project examples and their descriptions.
- **Articles Page** — presents technology and IT-related articles.
- **Contact Page** — allows visitors to submit enquiries.
- **Admin Login** — provides protected access to the admin dashboard.
- **Enquiry Management** — allows the admin to view, update the status of, and delete enquiries.
- **Responsive Navigation** — provides navigation across the website.

## 1. Project Structure

```text
yakunex-technologies_portfolio/
│
├── frontend/       # React frontend
├── backend/        # Laravel backend and REST API
├── docs/           # Project documentation and wireframes
├── README.md
├── PROJECT_DOCUMENTATION.md
├── TESTING.md
└── AI_AND_RESOURCES.md
```

## 2. Technologies Used

| Area | Technology |
|---|---|
| Frontend | React, JavaScript |
| Build Tool | Vite |
| Styling | Tailwind CSS |
| Backend | Laravel, PHP |
| Database | MySQL |
| API | REST API |
| Authentication | Laravel Sanctum |
| Version Control | Git and GitHub |

## 3. Run the Project Locally

### Requirements

Install the following software before running the project:

- Node.js and npm
- PHP
- Composer
- MySQL
- XAMPP or another MySQL server
- Git

### Step 1 — Clone the Repository

```bash
git clone https://github.com/zainabmr46-code/yakunex-technologies_portfolio.git

cd yakunex-technologies_portfolio
```

### Step 2 — Configure the Backend

Open a terminal and navigate to the backend folder:

```bash
cd backend
```

Install PHP dependencies:

```bash
composer install
```

Create the environment file:

```bash
cp .env.example .env
```

Generate the application key:

```bash
php artisan key:generate
```

Create a MySQL database named:

```text
yakunex_portfolio
```

Update the database configuration in the backend `.env` file with your local MySQL username and password.

Run database migrations:

```bash
php artisan migrate
```

Start the Laravel development server:

```bash
php artisan serve
```

The backend API will normally run at:

```text
http://127.0.0.1:8000/api
```

### Step 3 — Configure the Frontend

Open another terminal and navigate to the frontend folder:

```bash
cd frontend
```

Install the frontend dependencies:

```bash
npm install
```

Create a `.env` file in the frontend folder and configure the backend API URL:

```env
VITE_API_URL=http://127.0.0.1:8000/api
```

Start the frontend development server:

```bash
npm run dev
```

Open the local URL displayed in the terminal. It is usually:

```text
http://localhost:5173
```

### Step 4 — Build the Frontend

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## 4. Contact Form and Admin Dashboard

Visitors can submit enquiries through the Contact page. The submitted information is validated by the backend and stored in the MySQL database.

The admin dashboard provides functionality to:

- Log in as an administrator.
- View submitted enquiries.
- Update enquiry statuses.
- Delete enquiries.
- Log out securely.

The admin API routes are protected using authentication and admin authorization middleware.

**Note:** The current email configuration uses Laravel's log mail driver. Enquiries are stored in the database, but live email notifications are not configured.

## 5. Documentation

Additional project documentation is provided in the repository:

- `PROJECT_DOCUMENTATION.md` — project objectives, requirements, design decisions, and architecture.
- `TESTING.md` — testing procedures and results.
- `AI_AND_RESOURCES.md` — AI tools, external resources, and other development references.
- `docs/wireframe/` — design wireframes.

## 6. Future Improvements

- Integrate real email notifications for contact enquiries.
- Improve admin dashboard functionality.
- Perform additional accessibility and performance testing.
- Deploy the website to a production hosting environment.
- Add more company projects and technology-related articles.

## 7. Developer

**Zainab Mujibur Rahuman**

HNDIT — Information Technology

GitHub: https://github.com/zainabmr46-code

Portfolio: https://zainabmr46-code.github.io/zainab

---

**Project:** Yakunex Technologies Company Portfolio Website  
**Purpose:** Individual Software Development Assessment  
**Technologies:** React, Tailwind CSS, Laravel, PHP, MySQL
