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

const staffRoutes = require("./src/routes/staff.js");

const doctorRoutes = require("./src/routes/doctor.js")
const paramedicRoutes = require('./src/routes/paramedicRoutes.js');



dotenv.config();
connectDB();

const app = express();
const port = process.env.PORT || 5000;

// 🔹 1. Configurer CORS correctement
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:3000"], 
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
  })
);
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

// 🔹 2. Activer le support des requêtes `OPTIONS` (Preflight)
app.options("*", cors());
app.use("/", express.static(path.join(__dirname, "Medical-React-Dashboard/build")));
app.use("/emergency", emergencyRoutes);
// Servir le Back-Office (mediic)
app.use("/admin", express.static(path.join(__dirname, "mediic/dist")));

// 🔹 3. Middlewares essentiels
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// 🔹 4. Routes
app.use("/users", userRoutes);
app.use("/patient", patientRoutes);

app.use("/staff", staffRoutes);
app.use("/doctors", doctorRoutes);
app.use('/paramedics', paramedicRoutes);


// 🔹 5. Démarrer le serveur
app.listen(port, () => console.log(`🚀 Server running on port ${port}`));
