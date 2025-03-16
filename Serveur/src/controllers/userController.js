const express = require('express');
const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');
const generateToken = require('../utils/generetedToken');
const nodemailer = require('nodemailer');
const sendSMS = require('../sendSMS.js') ; 
const cloudinary = require('../cloudinary.js');
const mongoose = require('mongoose');


const authUserfrontoff = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
console.log(user)

  if (user && (await user.matchPassword(password))) {
    const userId = user._id;
    const role = user.role;
    const token = jwt.sign({ userId, role }, process.env.JWT_SECRET, {
      expiresIn: '30d',
    });
    req.session.user = {
      id: user._id,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
    };


    res.cookie('jwt', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development', // Use secure cookies in production
      sameSite: 'strict', // Prevent CSRF attacks
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    });
    res.json({
      token: token,
      message: "Connexion réussie",
      user1: req.session.user,
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});
const authUserbackoff = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
console.log(user)

  if (user && (await user.matchPassword(password))) {
    const userId = user._id;
    const role = user.role;
    const token = jwt.sign({ userId, role }, process.env.JWT_SECRET, {
      expiresIn: '30d',
    });
    req.session.user = {
      id: user._id,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
    };


    res.cookie('jwt', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development', // Use secure cookies in production
      sameSite: 'strict', // Prevent CSRF attacks
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    });
    res.json({
      token: token,
      message: "Connexion réussie",
      user1: req.session.user,
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});
const authUsergoogle = asyncHandler(async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    const userId = user._id;
    const role = user.role;
    const token = jwt.sign({role, userId }, process.env.JWT_SECRET, {
      expiresIn: '30d',
    });
    console.log(token)
    req.session.user = {
      id: user._id,
      lastName: user.lastName,
      email: user.email,
    };


    res.cookie('jwt', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development', // Use secure cookies in production
      sameSite: 'strict', // Prevent CSRF attacks
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    });
    res.json({
      token: token,
      message: "Connexion réussie",
      user1: req.session.user,
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});
const authUserfacebook = asyncHandler(async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    const userId = user._id;    const role = user.role;

    const token = jwt.sign({ role,userId }, process.env.JWT_SECRET, {
      expiresIn: '30d',
    });
    console.log(token)
    req.session.user = {
      id: user._id,
      lastName: user.lastName,
      email: user.email,
    };


    res.cookie('jwt', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development', // Use secure cookies in production
      sameSite: 'strict', // Prevent CSRF attacks
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    });
    res.json({
      token: token,
      message: "Connexion réussie",
      user1: req.session.user,
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});


 const registerUser = async (req, res) => {
  try {
    const { name, email, phoneNumber, password } = req.body;

    // Vérifier si tous les champs requis sont fournis
    if (!name || !email || !password) {
      return res.status(400).json({ success: false, message: 'Name, email, and password are required' });
    }

    // Vérifier si le numéro de téléphone est fourni (optionnel)
    if (!phoneNumber) {
      return res.status(400).json({ success: false, message: 'Phone number is required' });
    }

    // Créer l'utilisateur (assumer que tu as un modèle User pour l'enregistrement)
    const newUser = new User({
      name,
      email,
      phoneNumber,
      password, // Assure-toi de hasher le mot de passe avant de l'enregistrer
    });

    // Sauvegarder l'utilisateur dans la base de données
    await newUser.save();

    // Envoyer un SMS de bienvenue ou de confirmation
    const messageBody = `Bienvenue, ${name}! Votre inscription a été réussie`;
    const result = await sendSMS(messageBody, phoneNumber);

    var transport = nodemailer.createTransport({
      /*host: 'smtp.gmail.com',
     port: 465,
    secure: true,*/
      service: "Gmail",
      auth: {
        user: "gytgutu@gmail.com",
        pass: "strp rifw uhso ciin",
      },
    });
    var mailOptions = {
      from: "smart 190",
      to: req.body.email,
      subject: "activer votre compte",
      html: `
       <div>
        <h1>Email d'activation du compte </h1>
          <h2>Bonjour </h2>
        <p>Veuillez confirmer votre email en cliquant sur le lien suivant
        <a >Cliquez ici</a>                              
         </div>`,
    };
    transport.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Mail sent successfully:-", info.response);
      }
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: 'Failed to register user',
      error: error.message,
    });
  }
};



const registerUsergoogle = asyncHandler(async (req, res) => {
  const { name, email } = req.body;
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User already existxxs');
  }

  const user = await User.create({
    firstName:name,
    email,
    role:"patient"

  });


});

const registerUserfacebook = asyncHandler(async (req, res) => {
  const { name, email } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error('User already existxxs');
  }

  const user = await User.create({
    firstName:name,
    email,

  });


});

const logoutUser = async (req, res) => {
  try {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ message: "Erreur lors de la déconnexion" });
      }
      res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0),
      });
      res.clearCookie("connect.sid"); // Assurez-vous que le cookie de session est supprimé
      return res.json({ message: "Déconnexion réussie" }); // ✅ Utiliser return pour éviter plusieurs réponses
    });
  } catch (error) {
    if (!res.headersSent) { // ✅ Vérifier si une réponse a déjà été envoyée
      return res.status(500).json({ message: "Erreur serveur", error });
    }
  }
};
const getUserProfile1 = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    res.json({
      _id: user._id,
      lastName: user.lastName,      firstName: user.firstName,
      picture:user.picture,role:user.role,
      email: user.email,
    });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});


const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.userId);
  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});



const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    user.lastName = req.body.lastName || user.lastName;
    user.email = req.body.email || user.email;
    user.firstName = req.body.firstName || user.firstName;
    
    if (req.file) {
      user.picture = req.file.path || user.picture; // Stocke le chemin du fichier
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      lastName: updatedUser.lastName,
      email: updatedUser.email,
      firstName: updatedUser.firstName,
      picture: updatedUser.picture, // Retourner l'image mise à jour

    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

const resetpass = asyncHandler(async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return res.status(404).json({ message: "Utilisateur non trouvé" });
  }

  // Générer un token temporaire (expire en 1h)
  const token = jwt.sign({ id: user._id }, "SECRET_KEY", { expiresIn: "1h" });

  var transport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "gytgutu@gmail.com",
      pass: "strp rifw uhso ciin",
    },
  });

  var mailOptions = {
    from: "smart 190",
    to: req.body.email,
    subject: "Réinitialisation du mot de passe",
    html: `
      <div>
        <h1>Email de réinitialisation</h1>
        <h2>Bonjour,</h2>
        <p>Veuillez cliquer sur le lien ci-dessous pour réinitialiser votre mot de passe :</p>
        <a href="http://localhost:5173/ResetPassword/${user._id}">Réinitialiser mon mot de passe</a>
      </div>
    `,
  };

  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ message: "Erreur lors de l'envoi de l'email" });
    } else {
      console.log("Mail envoyé:", info.response);
      return res.json({ message: "Email envoyé avec succès" });
    }
  });
});
const forgetpass = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;  // Récupérer l'ID depuis l'URL
    const { newPassword } = req.body;  // Récupérer le mot de passe du corps de la requête

    // Hash du mot de passe
    bcrypt.hash(newPassword, 10)
      .then(hash => {
        // Mise à jour du mot de passe de l'utilisateur dans la base de données
        User.findByIdAndUpdate({ _id: id }, { password: hash })
          .then(u => res.send({ Status: "Success" }))
          .catch(err => res.status(500).send({ Status: "Error", message: err.message }));
      })
      .catch(err => res.status(500).send({ Status: "Error", message: err.message }));
  } catch (err) {
    res.status(500).send({ Status: "Error", message: err.message });
  }
});



const getAllUsers = asyncHandler(async (req, res) => {
  try {
    // Récupérer tous les utilisateurs (sans afficher les mots de passe)
    const users = await User.find({}, "-password");

    res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Erreur lors de la récupération des utilisateurs",
      error: error.message,
    });
  }
})

const uploadProfileImage = async (req, res) => {
  try {
    const file = req.file;

    if (!file) {
      return res.status(400).send('No file uploaded');
    }

    const result = await cloudinary.uploader.upload(file.path);

    const user = await User.findByIdAndUpdate(
      req.user.id, // ID de l'utilisateur (assuré par auth middleware)
      { profileImage: result.secure_url },
      { new: true } // Retourner l'utilisateur mis à jour
    );

    res.status(200).json({ message: 'Image uploaded successfully', user });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};



module.exports= {
  authUserfrontoff, updateUserProfile, getUserProfile, forgetpass,registerUser,getUserProfile1,
    authUserfacebook, registerUserfacebook,authUserbackoff,
    logoutUser, authUsergoogle, registerUsergoogle, resetpass, getAllUsers, uploadProfileImage
  };