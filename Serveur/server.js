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
const medicalRecordRoutes = require('./src/routes/medicalRecord.js');
const ressourcesRoutes = require("./src/routes/ressources.js");
const http = require('http');


const consultationRoutes = require("./src/routes/consultation.js")
const operationRoutes = require("./src/routes/operations.js")
const paramedicRoutes = require('./src/routes/paramedicRoutes.js');
const patientFileRoutes = require('./src/routes/patientFileRoutes');
const qaRoutes = require('./src/routes/qaRoutes');
const appointments = require('./src/routes/appointments');

const AmbulanceRequest = require("./src/models/AmbulanceRequest.js");
const PatientFile = require("./src/models/patientFile");
const imagePredictionRoute = require('./src/routes/imagePredictionRoute');
const medicalRoutes = require('./src/routes/medicalRoutes');
const stripeRoutes = require('./src/routes/stripe');

const emergencyRoomRoutes = require("./src/routes/roomEmergency.js");
const specialtyRoutes= require("./src/routes/openAi.js");
const twilio = require('twilio');
const accountSid = 'AC1185ae3b469d55fbc6b005d8f7066e53';
const authToken = 'c35707b6eb113f0ecdd537863fc38046';
const client = twilio(accountSid, authToken);


dotenv.config();
connectDB();

const app = express();
const port = process.env.PORT || 5000;


const server = http.createServer(app);

// Initialiser Socket.IO
const { Server } = require("socket.io");
const DoctorsRequest = require("./src/models/DoctorsRequest.js");
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173", "http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  },
});

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

  /*socket.on('call_doctors', async (data) => {
    console.log('patient file reçue:', data);
    
    // Enregistre dans la base
    try {
      await DoctorsRequest.create({
        from: data.from,
        doctorsId: data.doctorsId
      });
    } catch (err) {
      console.error("Erreur enregistrement demande :", err);
    }

    // Émet l'événement aux paramédics
    socket.broadcast.emit('ambulance_request', data);
  });*/
  socket.on('call_doctors', (data) => {
    console.log("Demande reçue de : ", data);  // Affiche la demande du client
    // Réponse (simulez une réponse après un certain délai ou selon votre logique métier)
    setTimeout(() => {
        io.to(data.from).emit('doctors_request', { doctorsId: data.doctorId });  // Envoie la notification
    }, 2000);
});
  // Quand un paramédic répond
  socket.on('ambulance_response', (data) => {
    console.log('Réponse du paramedic:', data);
    // Envoie la réponse au patient spécifique
    socket.to(data.to).emit('ambulance_response_result', { status: data.status });
  });
  socket.on('send_message', (data) => {
    console.log('Message received:', data);
    socket.broadcast.emit('receive_message', data); // Diffuser à tous les autres clients
  });
  
  socket.on('send_notification',(consultationData) => {
      console.log('Message reçu côté serveur:', consultationData);
      // Émettre l'événement à tous les clients connectés
      socket.broadcast.emit('send_notification', consultationData);
    });
  socket.on('disconnect', () => {
    console.log(`Utilisateur déconnecté: ${socket.id}`);
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
// Middleware pour servir les fichiers téléchargés (images)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api', medicalRoutes);


app.use('/api/stripe', stripeRoutes);
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
app.use("/medicalrecord", medicalRecordRoutes);
app.use("/consultation", consultationRoutes);
app.use("/operation",operationRoutes);
app.use("/api/llm-specialty", specialtyRoutes);
app.use("/emergencyrooms", emergencyRoomRoutes);
app.use("/ressources", ressourcesRoutes);
// Serve les frontends
app.use("/", express.static(path.join(__dirname, "Medical-React-Dashboard/build")));
app.use("/admin", express.static(path.join(__dirname, "mediic/dist")));

app.use('/api', imagePredictionRoute);



const stripe = require('stripe')('sk_test_51RNHOxQfFMfIjADYfssLirIsSvaCGJohvpvhGtTriiFkcG0py6zgovBmyA0HNWeDge2zYRE9tU0LnmdvuVHK7eo500He7PFcRe');  // Remplacez par votre clé secrète Stripe


app.use(express.json());  // Pour pouvoir lire les données JSON envoyées par le front-end

// Route pour créer un paiement
app.post('/api/create-payment-intent', async (req, res) => {
  const { amount, clientName, phoneNumber, cin } = req.body;

  console.log("Données du client :", {
    amount,
    clientName,
    phoneNumber,
    cin,
  });

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      metadata: {
        clientName,
        phoneNumber,
        cin,
      },
    });
  await sendSms(phoneNumber, clientName, amount);

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.get('/api/stripe/transactions', async (req, res) => {
  try {
    const paymentIntents = await stripe.paymentIntents.list({
      limit: 20, // ajuste selon besoin
    });

    const transactions = paymentIntents.data.map((pi) => ({
      id: pi.id,
      amount: pi.amount,
      currency: pi.currency,
      status: pi.status,
      created: pi.created,
      nom: pi.metadata.clientName || '—',
      phoneNumber: pi.metadata.phoneNumber || '—',
      cin: pi.metadata.cin || '—',
    }));

    res.json(transactions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur lors de la récupération des transactions' });
  }
});




// Déclaration de la fonction d'envoi SMS
const sendSms = async (phoneNumber, clientName, amount) => {
  try {
    await client.messages.create({
      body: `Bonjour ${clientName}, votre paiement de ${(amount / 100).toFixed(2)} DT a été effectué avec succès. Merci !`,
      from: '+19783912271', // Remplace par ton numéro Twilio
      to: phoneNumber.startsWith('+') ? phoneNumber : `+216${phoneNumber}`, // Exemple pour la Tunisie
    });
    console.log('SMS envoyé à', phoneNumber);
  } catch (err) {
    console.error('Erreur d’envoi SMS :', err.message);
  }
};



// Lancer le serveur
server.listen(port, () => console.log(`🚀 Server running on http://localhost:${port}`));
