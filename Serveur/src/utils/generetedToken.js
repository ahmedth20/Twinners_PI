const jwt = require("jsonwebtoken");

const generateToken = (res, userId, role) => {
  const token = jwt.sign({ userId, role }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development", // Utiliser des cookies sécurisés en production
    sameSite: "strict", // Prévention contre les attaques CSRF
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 jours
  });
};

module.exports = generateToken;
