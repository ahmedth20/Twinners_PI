//rc
let io;
const connectedUsers  = {}; // userId: socketId

const initSocket = (server) => {
  io = require('socket.io')(server, {
    cors: {
      origin: '*', // autoriser ton front
      methods: ['GET', 'POST'],
    },
  });

  io.on('connection', (socket) => {
    console.log('✅ Socket connecté :', socket.id);

    socket.on('register_user', (userId) => {
      connectedUsers [userId] = socket.id;
      console.log(`👤 Utilisateur enregistré : ${userId} -> ${socket.id}`);
    });

    socket.on('disconnect', () => {
      for (const userId in connectedUsers ) {
        if (connectedUsers [userId] === socket.id) {
          delete connectedUsers [userId];
          console.log(`❌ Déconnexion de ${userId}`);
        }
      }
    });
  });
};

module.exports = { initSocket, io, connectedUsers  };
