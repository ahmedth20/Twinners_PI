# 🏥 Smart Emergency Management System (S190)

## 📌 Description du Projet

Le **Smart Emergency Management System (S190)** est une application web innovante conçue pour optimiser la gestion des urgences hospitalières. Elle permet :

- Une **coordination intelligente** entre les patients, médecins, ambulanciers et gestionnaires.
- Une **prise en charge en temps réel** grâce à l’IA et à des objets connectés.
- Une **interface dédiée** pour chaque acteur du système de santé.

---

## 🧾 Table des Matières

- [Fonctionnalités](#fonctionnalités)
- [Structure du Projet](#structure-du-projet)
- [Installation & Lancement](#installation--lancement)
  - [1. Backend (Node.js + Express)](#1-backend-nodejs--express)
  - [2. Front-Office (Patients)](#2-front-office-patients)
  - [3. Back-Office (Personnel médical & Admin)](#3-back-office-personnel-médical--admin)
- [Technologies Utilisées](#technologies-utilisées)
- [Authentification et Rôles](#authentification-et-rôles)
- [Sécurité](#sécurité)
- [CI/CD et Déploiement](#cicd-et-déploiement)
- [Équipe](#équipe)

---

## ✅ Fonctionnalités

### Patients

- Enregistrement en ligne (pré-admission)
- Suivi de dossier médical en temps réel
- Affichage du temps d’attente estimé
- Consultation de l’historique médical
- Demande d’ambulance avec géolocalisation

### Paramedics

- Transmission automatique des données médicales au CHU
- Carte des urgences et des hôpitaux avec occupation en direct
- Optimisation de l’itinéraire selon l’urgence et la distance

### Médecins

- Accès instantané aux dossiers des patients
- Attribution automatique des cas selon spécialité et disponibilité
- Aide au diagnostic via intelligence artificielle

### Service Manager

- Suivi de l’occupation des salles, lits et ressources
- Prédictions sur les pics d’urgences
- Supervision des performances et génération de rapports

  ### Staff

- Suivi Enregistrement des patients 
- Faire les transactions


---

## 🗂 Structure du Projet

root/
│
├── Serveur/ # (BackEnd) Serveur Express Node.js (API REST)
│ └── server.js
│
├── front-office/ # Interface utilisateur pour les patients (React + Vite)
│ ├── public/
│ └── src/
│
├── back-office/ # Interface pour médecins, staff et gestionnaires (React + CRA)
│ ├── public/
│ └── src/
│
└── README.md

Configuration
Créer un fichier .env dans /backend :

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

1. Lancement du backend

node server.js
L’API sera accessible sur : http://localhost:5000

2. Front-Office (Patients)

cd front-office
npm install
npm run dev
Accessible sur : http://localhost:5173

3. Back-Office (Personnel médical & Admin)

cd back-office
npm install
npm start
Accessible sur : http://localhost:3000

🛠 Technologies Utilisées
Côté	Technologie
Backend	Node.js, Express.js, MongoDB, Mongoose, JWT
Front-Office	React, Vite, TailwindCSS
Back-Office	React (CRA), Redux, Axios
Authentification	JWT, BCrypt
DevOps	GitHub Actions, Docker (optionnel), Vercel ou Heroku
Tests	Jest, Supertest, Cypress (optionnel)

👤 Authentification et Rôles
Patient

Médecin

Ambulancier

Réceptionniste

Responsable de service

Chaque utilisateur accède à un tableau de bord personnalisé en fonction de son rôle avec des permissions spécifiques.

🔐 Sécurité
JWT pour l’authentification

Hashage des mots de passe via Bcrypt

Validation des inputs via Express-validator

Helmet & CORS pour la sécurité des headers et requêtes

RBAC (Role-Based Access Control)

🔄 CI/CD et Déploiement
Contrôle de version avec Git/GitHub

CI/CD via GitHub Actions

Linting via ESLint + Prettier

Tests automatiques à chaque push

Déploiement :

Backend : Heroku, Render, Railway

Front : Vercel ou Netlify

Monitoring : Prometheus, Grafana (future intégration)

👨‍💻 Équipe

Abdessalem Chaouch

Aymen Khelifa

Zorgui Ramez

Yosr Charek

Ahmed Thabti

Supervisé par Mme Ameni Rommene

Classe : 4TWIN5 - ESPRIT
Groupe : Twinners

📌 Remarques finales
Le projet est en phase active de développement.

Certaines fonctionnalités peuvent être simulées en environnement local.

Les futures versions incluront :

Intégration d’un bracelet connecté simulé

IA de prédiction de flux patients

Interconnexion avec des APIs de cartographie réelle (OpenStreetMap, Google Maps)
