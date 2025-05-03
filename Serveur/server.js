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
const ambulanceRoutes = require('./src/routes/ambulance.js');
const staffRoutes = require("./src/routes/staff.js");
const doctorRoutes = require("./src/routes/doctor.js");
const paramedicRoutes = require('./src/routes/paramedicRoutes.js');
const patientFileRoutes = require('./src/routes/patientFileRoutes');
const qaRoutes = require('./src/routes/qaRoutes');
const appointments = require('./src/routes/appointments');

const AmbulanceRequest = require("./src/models/AmbulanceRequest.js");
const PatientFile = require("./src/models/patientFile");
const imagePredictionRoute = require('./src/routes/imagePredictionRoute');



dotenv.config();
connectDB();

const app = express();
const port = process.env.PORT || 5000;

// Créer un serveur HTTP
const http = require("http");
const server = http.createServer(app);

// Initialiser Socket.IO
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173", "http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  },
});

// 🔸 Suivi des utilisateurs connectés
let connectedUsers = {};

// 🔸 Socket.IO - Événements
io.on("connection", (socket) => {
  console.log("✅ Utilisateur connecté :", socket.id);

  // Enregistrement de l'utilisateur avec son userId
  socket.on("register", (userId) => {
    connectedUsers[userId] = socket.id;
    console.log(`Utilisateur ${userId} enregistré avec le socket ${socket.id}`);
  });

 // 🔔 Notification : ajout d’un patient file
 socket.on("new_patient_file", ({ doctorId, message }) => {
  if (!doctorId || !message) {
    console.warn("⚠️ Données invalides pour new_patient_file :", { doctorId, message });
    return;
  }

  // Vérifiez si le médecin est le bon
  if (doctorId === "medecin74@gmail.com") {
    // Logique pour envoyer le fichier patient au médecin
    console.log("Nouveau fichier patient pour le médecin :", doctorId);
    // Ajoutez ici le code pour traiter le fichier et l'envoyer au médecin
  } else {
    console.log("Ce fichier patient n'est pas destiné à ce médecin.");
  }
});

  // 🔁 Appel ambulance
  socket.on('call_ambulance', async (data) => {
    console.log('Demande d\'ambulance reçue:', data);
    try {
      await AmbulanceRequest.create({
        from: data.from,
        ambulanceId: data.ambulanceId
      });
    } catch (err) {
      console.error("Erreur enregistrement demande :", err);
    }
    socket.broadcast.emit('ambulance_request', data);
  });

  // Réponse du paramedic
  socket.on('ambulance_response', (data) => {
    socket.to(data.to).emit('ambulance_response_result', { status: data.status });
  });

  // Déconnexion
  socket.on("disconnect", () => {
    for (let userId in connectedUsers) {
      if (connectedUsers[userId] === socket.id) {
        delete connectedUsers[userId];
        break;
      }
    }
    console.log("❌ Utilisateur déconnecté :", socket.id);
  });
});

// Middleware
app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:3000"],
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session({
  secret: process.env.JWT_SECRET,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: process.env.MONGO_URI,
    collectionName: "sessions",
    ttl: 60
  })
}));

// Routes
app.use("/users", userRoutes);
app.use("/emergency", emergencyRoutes);
app.use("/patient", patientRoutes);
app.use("/staff", staffRoutes);
app.use("/doctors", doctorRoutes);
app.use("/paramedics", paramedicRoutes);
app.use("/servicemanager", sermanagerRoutes);
app.use("/ambulance", ambulanceRoutes);
app.use("/patientFiles", patientFileRoutes);
app.use('/api/qa', qaRoutes);
app.use("/appointments", appointments);

// Serve les frontends
app.use("/", express.static(path.join(__dirname, "Medical-React-Dashboard/build")));
app.use("/admin", express.static(path.join(__dirname, "mediic/dist")));

app.use('/api', imagePredictionRoute);

// Lancer le serveur
server.listen(port, () => console.log(`🚀 Server running on http://localhost:${port}`));
