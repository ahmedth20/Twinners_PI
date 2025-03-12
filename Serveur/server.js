const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const path = require("path");
const connectDB = require("./src/configs/db.config.js");
const userRoutes = require("./src/routes/userRoutes.js");
const emergencyRoutes = require("./src/routes/allEmergency.js");
const patientRoutes = require("./src/routes/patient.js");
const paramedicRoutes = require('./src/routes/paramedicRoutes');

dotenv.config();
connectDB(); // Connexion à la base de données MongoDB

const app = express();
const port = process.env.PORT || 5000;

// 🔹 1. Configurer CORS correctement
app.use(
  cors({
    origin: process.env.CORS_ORIGINS ? process.env.CORS_ORIGINS.split(",") : ["http://localhost:5173", "http://localhost:3000"], // Origines dynamiques via .env
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
  })
);

// 🔹 2. Configurer la session avec MongoDB
app.use(
  session({
    secret: process.env.JWT_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI, 
      collectionName: "sessions",
      ttl: 60, 
    }),
  })
);

app.options("*", cors());

app.use(express.json());  // Middleware pour traiter les requêtes JSON
app.use(express.urlencoded({ extended: false }));  // Middleware pour traiter les formulaires URL-encodés
app.use(cookieParser()); // Middleware pour gérer les cookies

// 🔹 5. Servir les fichiers statiques pour le frontend
app.use("/", express.static(path.join(__dirname, "Medical-React-Dashboard/build"))); // Dossier du frontend React
app.use("/admin", express.static(path.join(__dirname, "mediic/dist"))); // Dossier du back-office

// 🔹 6. Routes de l'API
app.use("/emergency", emergencyRoutes);
app.use("/users", userRoutes);
app.use("/patient", patientRoutes);
app.use('/paramedics', paramedicRoutes);

// 🔹 7. Gestion des erreurs (Middleware global)
app.use((err, req, res, next) => {
  console.error("Erreur serveur : ", err);
  res.status(500).json({
    message: "Erreur interne du serveur. Veuillez réessayer plus tard.",
  });
});

// 🔹 8. Démarrer le serveur
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
