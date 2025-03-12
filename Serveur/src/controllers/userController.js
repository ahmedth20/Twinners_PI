const express = require('express');
const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');
const generateToken = require('../utils/generetedToken');
const nodemailer = require('nodemailer');
const sendSMS = require('../sendSMS.js') ; 
const cloudinary = require('../cloudinary.js');

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    const userId=user._id;
    const role=user.role;
 const token = jwt.sign({ userId,role }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
  req.session.user = {
    id: user._id,
    name: user.name,
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
      token:token,
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

  if (user ) {
    const userId=user._id;
 const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
  console.log(token)
  req.session.user = {
    id: user._id,
    name: user.name,
    email: user.email,
  };

  
  res.cookie('jwt', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development', // Use secure cookies in production
    sameSite: 'strict', // Prevent CSRF attacks
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
  });
    res.json({
      token:token,
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

  if (user ) {
    const userId=user._id;
 const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
  console.log(token)
  req.session.user = {
    id: user._id,
    name: user.name,
    email: user.email,
  };

  
  res.cookie('jwt', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development', // Use secure cookies in production
    sameSite: 'strict', // Prevent CSRF attacks
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
  });
    res.json({
      token:token,
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
    name,
    email,
   
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
    name,
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
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(req.body.password, salt);
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});


const resetpass= asyncHandler(async (req, res) => {



  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(404).json({ message: "Utilisateur non trouvé" });
  }
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
        subject: "password oublie??",
        html: `
           <div>
            <h1>Email de verification  </h1>
              <h2>Bonjour aymen </h2>
            <p>Veuillez confirmer votre email en cliquant sur le lien suivant
            <a href=http://localhost:5173/ResetPassword/${user._id}>Cliquez ici</a>                              
             </div>`,
      };
      res
            .json({ message: "Mail sent successfully check your inbox" });
      transport.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
          res.json("error: ");
        } else {
          console.log("Mail sent successfully:-", info.response);
         
        }
      });
    
   
})

const forgetpass= asyncHandler(async (req, res) => {

  
    const { password } = req.body;
    const activationCode = req.params.activationCode; 
    console.log("Activation Code:", activationCode);
    const user = await User.findById({ _id:activationCode });
    if (!user) {
      return res.status(404).json({ message: "Utilisateur non trouvé ou code invalide" });
    }
    console.log("Activation Code:", user);
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log("Activation Code:", hashedPassword);

    user.password = hashedPassword;await user.save();

       res.json({ message: "Mot de passe modifié avec succès" });

})

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
  authUser, updateUserProfile, getUserProfile, forgetpass,registerUser,
  authUserfacebook, registerUserfacebook,
  logoutUser, authUsergoogle, registerUsergoogle, resetpass, getAllUsers, uploadProfileImage

};


