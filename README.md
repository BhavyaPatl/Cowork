# **CoWork**


## **Table of Contents**

1. [Overview](#overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Installation](#installation)
5. [Environment Variables](#environment-variables)
6. [Contact](#contact)
7. [Team Members](#team-members)

---

## **Overview**

This project is a real time collaborative code editor that allows multiple users to edit and manage their projects simultaneously with real-time synchronization and robust authentication, using distributed system concepts.

## **Features**

- Real-time collaboration with **`Socket.IO`**.  
- Authentication via **JWT**.  
- RESTful API using **Express**.  
- **PostgreSQL** for database storage.  
- Password reset with **Nodemailer**.  
- Rich Text Editor with **CodeMirror**.
- Code Runner with **Piston API**

---

## **Tech Stack**

### **Frontend**:
- React.js (with React Router)
- Material UI
- Axios for API calls
- `Socket.IO` for real-time features
- Google OAuth
- CodeMirror

### **Backend**:
- Node.js
- Express.js
- `Socket.IO` for real-time features
- JWT for authentication
- Nodemailer
- Google OAuth
- Piston API

### **Database**:
- PostgreSQL 16


---

## **Installation**

1. **Clone the repository**:
   ```bash
   git clone this repo link
   cd CoWork
   ```
&nbsp;

2. **Install dependencies**:
   - Install backend dependencies:
     ```bash
     cd backend
     npm install
     ```
   - Install frontend dependencies:
     ```bash
     cd frontend
     npm install
     ```

&nbsp;

3. **Configure environment variables**:  
   Create a `.env` file in both `frontend` and `backend` directories. 
   See [Environment Variables](#environment-variables) for required keys.

&nbsp;

4. **Run the application**:
   - Start the backend:
     ```bash
     cd backend
     npm run start
     ```
   - Start the frontend:
     ```bash
     cd frontend
     npm run start
     ```
&nbsp;

5. Open [http://localhost:3000](http://localhost:3000) to view the application in the browser.

---

## **Environment Variables**

### Backend (`/backend/.env`):
```env
#PORT
PORT=YOUR_PORT

#SALT ROUNDS
SALT_ROUNDS=YOUR_SALT_ROUNDS

#JWT SECRET KEY
JWT_SECRET_KEY=YOUR_JWT_SECRET
JWT_TIMEOUT=YOUR_JWT_TIMEOUT

#SMTP
USER_EMAIL=YOUR_EMAIL
USER_PASS=YOUR_PASSWORD

#DATABASE URL
POSTGRES_URL=YOUR_DATABASE_URL

#FRONTEND URL
FRONTEND_URL=YOUR_FRONTEND_URL

#GOOGLE OAUTH
GOOGLE_CLIENT_ID=YOUR_GOOGLE_CLIENT_ID
GOOGLE_CLIENT_SECRET=YOUR_GOOGLE_CLIENT_SECRET

#MAIL VERIFICATION
ABSTRACT_API_KEY=YOUT_ABSTRACT_API_KEY 
```

### Frontend (`/frontend/.env`):
```env
#API URL
REACT_APP_BACKEND_API=YOUR_BACKEND_API

#GOOGLE OAUTH
REACT_APP_GOOGLE_CLIENT_ID=YOUR_GOOGLE_CLIENT_ID
```

  


## **Team Members**

Here is a list of team members who contributed to this project:

- **Harshvardhan Vajani** - Project Leader
- **Bhavya Patel** 
- **Vaishvik Patel** 
 
---

### **Screenshots**  
Include screenshots or GIFs to showcase the application functionality.

1. [Login Page](#login-page)
2. [SignUp Page](#signup-page)
3. [Home Page](#home-page)
4. [Google-OAuth](#google-oauth)
5. [Forgot Password](#forgot-password)
6. [Profile](#profile)
7. [Project Page](#project-page)
8. [Code Editor](#code-editor)

### `Login Page`
![login](./screenshots/signin.png)

### `SignUp Page`
![SignUp](./screenshots/signup.png)

### `Home Page`
![Home](./screenshots/Home.png)
&nbsp;
&nbsp;
![Home](./screenshots/Features.png)
&nbsp;
&nbsp;
![Home](./screenshots/aboutus.png)

### `Google OAuth`
![Google OAuth](./screenshots/signinwithemail.png)

### `Forgot Password`
![Forgot Password](./screenshots/otp.png)
&nbsp;
&nbsp;
![Forgot Password](./screenshots/reset.png)


### `Profile`
![Profile](./screenshots/profile.png)

### `Project Page`
![Project Page](./screenshots/project.png)
&nbsp;
&nbsp;
![Project Page](./screenshots/createproject.png)
&nbsp;
&nbsp;
![Project Page](./screenshots/admin.png)
&nbsp;
&nbsp;
![Project Page](./screenshots/delete.png)

### `Code Editor`
![Code Editor](./screenshots/cursor2.png)
&nbsp; 
&nbsp;
![Code Editor](./screenshots/contributors2.png)
&nbsp; 
&nbsp;
![Code Editor](./screenshots/logs2.png)
&nbsp; 
&nbsp;
![Code Editor](./screenshots/coderun2.png)
&nbsp; 
&nbsp;
![Code Editor](./screenshots/chat2.png)

---
<p align="center"><strong>- CoWork Team -</strong></p>
