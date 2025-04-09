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

const staffRoutes = require("./src/routes/staff.js");

const doctorRoutes = require("./src/routes/doctor.js")
const paramedicRoutes = require('./src/routes/paramedicRoutes.js');

const http = require('http');


dotenv.config();
connectDB();
const { Server } = require('socket.io');

const app = express();
const port = process.env.PORT || 5000;
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: ["http://localhost:5173", "http://localhost:3000"], // FrontOffice et BackOffice
        methods: ["GET", "POST"]
    }
});
io.on('connection', (socket) => {
  console.log('Client connected:', socket.id);

  socket.on('disconnect', () => {
      console.log('Client disconnected:', socket.id);
  });

  // Listen for patient registration from FrontOffice
  socket.on('patient-registered', (patientData) => {
      console.log('New patient registered:', patientData);
      // Emit notification to BackOffice
      io.emit('new-registration',  { name: patientData.name });
  });
});
app.get('/', (req, res) => {
  res.send('Socket server is running');
});
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
app.use("/hh", express.static(path.join(__dirname, "Medical-React-Dashboard/build")));
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

app.use("/servicemanager", sermanagerRoutes);

// 🔹 5. Démarrer le serveur
app.listen(port, () => console.log(`🚀 Server running on port ${port}`));
