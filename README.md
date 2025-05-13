# 🏥 Smart Emergency Management System (S190)

## 📌 Project Description

The **Smart Emergency Management System (S190)** is an innovative web application designed to optimize the management of hospital emergencies. It enables:

- **Intelligent coordination** between patients, doctors, paramedics, and managers.
- **Real-time patient care** using AI and connected devices.
- **Dedicated interfaces** for each healthcare system actor.

---

## 🧾 Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Installation & Launch](#installation--launch)
  - [1. Backend (Node.js + Express)](#1-backend-nodejs--express)
  - [2. Front-Office (Patients)](#2-front-office-patients)
  - [3. Back-Office (Medical Staff & Admin)](#3-back-office-medical-staff--admin)
- [Technologies Used](#technologies-used)
- [Authentication and Roles](#authentication-and-roles)
- [Security](#security)
- [CI/CD and Deployment](#cicd-and-deployment)
- [Team](#team)
- [Final Remarks](#final-remarks)

---

## ✅ Features

### Patients

- Online registration (pre-admission)
- Real-time medical record tracking
- Display of estimated waiting time
- Access to medical history
- Ambulance request with geolocation

### Paramedics

- Automatic transmission of medical data to hospital
- Emergency map with live hospital occupancy
- Optimized route based on urgency and distance

### Doctors

- Instant access to patient records
- Automatic case assignment by specialty and availability
- AI-assisted diagnosis

### Service Manager

- Monitoring of rooms, beds, and resources
- Emergency peak predictions
- Performance monitoring and report generation

### Staff

- Patient tracking and registration
- Transaction management

---

## 🗂 Project Structure

```
root/
├── Serveur/               # Backend: Node.js + Express (REST API)
│   └── server.js
├── front-office/          # Patient Interface (React + Vite)
│   ├── public/
│   └── src/
├── back-office/           # Medical Staff, Admin Interface (React CRA)
│   ├── public/
│   └── src/
└── README.md              # Documentation
```

---

## 🚀 Installation & Launch

### Prerequisites

- Node.js v18+
- MongoDB (local or Atlas)
- npm

### Configuration

Create a `.env` file inside the `Serveur/` folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

### 1. Backend (Node.js + Express)

```bash
cd Serveur
npm install
node server.js
```

📍 REST API available at: `http://localhost:5000`

---

### 2. Front-Office (Patients)

```bash
cd front-office
npm install
npm run dev
```

📍 App available at: `http://localhost:5173`

---

### 3. Back-Office (Medical Staff & Admin)

```bash
cd back-office
npm install
npm start
```

📍 App available at: `http://localhost:3000`

---

## 🛠 Technologies Used

| Layer         | Technologies                                                |
|---------------|-------------------------------------------------------------|
| Backend       | Node.js, Express.js, MongoDB, Mongoose, JWT                 |
| Front-Office  | React, Vite, CSS                                            |
| Back-Office   | React (CRA), Redux, Axios                                   |
| Authentication| JWT, Bcrypt                                                 |
| DevOps        | GitHub Actions, Docker (optional), Jenkins, Nexus           |

---

## 👤 Authentication and Roles

- **Patient**
- **Doctor**
- **Paramedic**
- **Staff**
- **Service Manager**

Each user accesses a **personalized dashboard** with **role-based permissions (RBAC)**.

---

## 🔐 Security

- **JWT** authentication
- Passwords **hashed with Bcrypt**
- Input validation with **express-validator**
- **Role-based access control** with JWT Tokens

---

## 🔄 CI/CD and Deployment

- Version control with **Git/GitHub**
- **CI/CD** via GitHub Actions
- Linting: **ESLint + Prettier**
- Automated tests on each push
- Deployment:
  - **Backend**: Nexus
  - **Frontend**: Nexus
- Future Monitoring: **Prometheus**, **Grafana**

---

## 👨‍💻 Team

- Abdessalem Chaouch  
- Aymen Khelifa  
- Zorgui Ramez  
- Yosr Charek  
- Ahmed Thabti  

🎓 **Class**: 4TWIN5 - Esprit School of Engineering  
👥 **Group**: Twinners  
🧑‍🏫 **Supervised by**: Mrs. Ameni Rommene

---

## 📌 Final Remarks

- The project is **actively under development**.
- Some features are **simulated locally**.
- Upcoming additions:
  - **Simulated connected bracelet**
  - **Predictive AI** for patient flow
  - **Map APIs** (OpenStreetMap, Google Maps)
