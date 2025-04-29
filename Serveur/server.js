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
const sermanagerRoutes = require("./src/routes/serviceManager.js");
const ressources = require("./src/routes/ressources");

const staffRoutes = require("./src/routes/staff.js");

const doctorRoutes = require("./src/routes/doctor.js")
const paramedicRoutes = require('./src/routes/paramedicRoutes.js');

const http = require('http');

const app = express();
const port = process.env.PORT || 5000;
dotenv.config();
connectDB();



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
app.use('/ressources', ressources);

// 🔹 2. Activer le support des requêtes `OPTIONS` (Preflight)
app.options("*", cors());
app.use("/hh", express.static(path.join(__dirname, "Medical-React-Dashboard/build")));
app.use("/emergency", emergencyRoutes);
// Servir le Back-Office (mediic)
app.use("/admin", express.static(path.join(__dirname, "mediic/dist")));
app.use(cookieParser());

app.get("/set-cookie", (req, res) => {
  res.cookie("myCookie", "123456", {
    httpOnly: true,
    sameSite: "Lax", // Important: "Strict" ou "Lax" = first-party only
  });
  res.send("Cookie défini !");
});

app.get("/get-cookie", (req, res) => {
  const cookie = req.cookies.myCookie;
  res.send(`Cookie lu : ${cookie}`);
});
// 🔹 3. Middlewares essentiels
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


const appointmentRoutes = require('./src/routes/appointments.js');
app.use('/appointments', appointmentRoutes);
// 🔹 4. Routes
app.use("/users", userRoutes);
app.use("/patient", patientRoutes);

app.use("/staff", staffRoutes);
app.use("/doctors", doctorRoutes);
app.use('/paramedics', paramedicRoutes);

app.use("/servicemanager", sermanagerRoutes);

// 🔹 5. Démarrer le serveur
app.listen(port, () => console.log(`🚀 Server running on port ${port}`));
