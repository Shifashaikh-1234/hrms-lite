Live Application

Frontend (Vercel):
👉 https://hrms-lite-pfr1vqwve-shifashaikh-1234s-projects.vercel.app

Backend API (Render):
👉 https://hrms-backend-f6f5.onrender.com

API Docs (Swagger):
👉 https://hrms-backend-f6f5.onrender.com/docs

🧾 Project Overview

HRMS Lite is a lightweight, web-based Human Resource Management System designed to handle core HR operations such as employee management and attendance tracking.

The application simulates a basic internal HR tool with a clean, professional UI and a robust backend, focusing on correctness, usability, and production readiness rather than over-engineering.

⚙️ Tech Stack
Frontend

React.js (Vite)

Tailwind CSS

Axios

React Router DOM

Backend

FastAPI

SQLAlchemy

Pydantic

PostgreSQL

Deployment

Frontend: Vercel

Backend & Database: Render

✨ Features
✅ Core Features

Add new employees

View all employees

Delete employees

Mark employee attendance (Present / Absent)

View attendance records per employee

Server-side validation and error handling

Clean and responsive UI

🌟 Bonus Features

📊 Dashboard Summary

Total employees

Total attendance records

Total present days

📅 Filter attendance records by date

📈 Total present days per employee

🎨 Professional UI using Tailwind CSS

🧠 Application Structure
hrms-lite/
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   ├── database.py
│   │   ├── models.py
│   │   ├── schemas.py
│   │   ├── crud.py
│   │   └── routers/
│   │       ├── employees.py
│   │       └── attendance.py
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.jsx
│   └── package.json

🚀 How to Run Locally
Backend
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload

Frontend
cd frontend
npm install
npm run dev

🛡️ Validations & Error Handling

Required field validation

Email format validation

Duplicate employee prevention

Duplicate attendance prevention (same employee + same date)

Meaningful HTTP status codes and messages

Graceful UI error handling

📌 Assumptions & Limitations

Single admin user (no authentication)

Payroll, leave management, and advanced HR features are out of scope

CORS configured openly for demo/assignment purposes

✅ Deployment Notes

Backend deployed on Render with PostgreSQL

Frontend deployed on Vercel and connected to live backend

Publicly accessible URLs

Production issues (CORS, HTTPS, cold start) handled correctly

🎯 Conclusion

This project demonstrates end-to-end full-stack development skills, including frontend design, backend API development, database modeling, deployment, and production debugging.
