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
<<<<<<< HEAD
const ressources = require("./src/routes/ressources");

=======
const ambulanceRoutes = require('./src/routes/ambulance.js');
const http = require('http');
const { Server } = require('socket.io');
>>>>>>> main
const staffRoutes = require("./src/routes/staff.js");
const doctorRoutes = require("./src/routes/doctor.js")
const paramedicRoutes = require('./src/routes/paramedicRoutes.js');
const AmbulanceRequest = require("./src/models/AmbulanceRequest.js");



// Config
dotenv.config();
connectDB();

const app = express();
const port = process.env.PORT || 5000;

// Créer un serveur HTTP
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ['http://localhost:5173', 'http://localhost:3000'],
    methods: ['GET', 'POST'],
    credentials: true,  // Ajoutez cela pour que Socket.io envoie les cookies
  },
});

app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:3000"], // Frontend
    credentials: true,  // Permet d'envoyer des cookies avec les requêtes
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
  })
);


io.on('connection', (socket) => {
  console.log(`Utilisateur connecté: ${socket.id}`);

  // Quand un patient appelle une ambulance
  socket.on('call_ambulance', async (data) => {
    console.log('Demande d\'ambulance reçue:', data);
    
    // Enregistre dans la base
    try {
      await AmbulanceRequest.create({
        from: data.from,
        ambulanceId: data.ambulanceId
      });
    } catch (err) {
      console.error("Erreur enregistrement demande :", err);
    }

    // Émet l'événement aux paramédics
    socket.broadcast.emit('ambulance_request', data);
  });

  // Quand un paramédic répond
  socket.on('ambulance_response', (data) => {
    console.log('Réponse du paramedic:', data);
    // Envoie la réponse au patient spécifique
    socket.to(data.to).emit('ambulance_response_result', { status: data.status });
  });

  socket.on('disconnect', () => {
    console.log(`Utilisateur déconnecté: ${socket.id}`);
  });
});



// Sessions
app.use(
  session({
    secret: process.env.JWT_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI,
      collectionName: "sessions",
      ttl: 60
    })
  })
);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Routes
app.use("/users", userRoutes);
app.use("/emergency", emergencyRoutes);
app.use("/patient", patientRoutes);
app.use("/staff", staffRoutes);
app.use("/doctors", doctorRoutes);
app.use("/paramedics", paramedicRoutes);
app.use("/servicemanager", sermanagerRoutes);
app.use("/ambulance", ambulanceRoutes);

// Frontends
app.use("/", express.static(path.join(__dirname, "Medical-React-Dashboard/build")));
app.use("/admin", express.static(path.join(__dirname, "mediic/dist")));

// Démarrer serveur AVEC WebSocket support
server.listen(port, () => console.log(`🚀 Server running on http://localhost:${port}`));




/*

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
*/