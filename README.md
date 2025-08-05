# Digital_Health_Clinic

 Patient-portal for digital health clinic, where patients can register, view , book and download the reports in the pdf format.

 #### Deployed Link - "https://digitalhealthclinic.netlify.app/"

 ## Features
 - Register.
 - View available Lab tests.
 - Book a test.
 - Download the report.

## Tech Stack
- Frontend - React(vite)
- Backend - Nodejs, Expressjs
- Database - MongoDB
- Deployment - Netlify, Render

## Routes
- /register - patient registration page
- /login - patient login page
- /tests - List of Lab tests
- /bookings - list of patient lab test bookings and download the report
- /book - for booking a lab test

## Approach

1. Problem Understanding:
   - The app needs to simplify the patient journey to get the report and book the lab tests.
2. Frontend:
   - React with vite for responsiveness
   - used react router for client-side routing
   - Axios for handling API requests to backend
3. Backend:
   - Set up a REST API using Nodejs and Express.
   - Used MongoDB for storing the data
   - JWT-based authentication for secure patient access.
4. Integration:
   - Enabled CORS to allow frontend-backend communication
   - Deployed frontend in Netlify and backend in Render
5. Testing:
   - Tested API endpoints with Bruno
