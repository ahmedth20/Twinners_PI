const ServiceManager = require("../models/serviceManger");
const User = require("../models/user");
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');

const serviceManagerController = {
  // 📌 Récupérer tous les service managers
  async getAllServiceManagers(req, res) {
    try {
      const serviceManagers = await ServiceManager.find().populate("user", "firstName lastName email");
      res.json(serviceManagers);
    } catch (error) {
      res.status(500).json({ message: "Erreur lors de la récupération des service managers", error });
    }
  },

  // 📌 Récupérer un service manager par ID
  async getServiceManagerById(req, res) {
    try {
      const serviceManager = await ServiceManager.findById(req.params.id);
      if (!serviceManager) return res.status(404).json({ message: "Service manager non trouvé" });
      res.json(serviceManager);
    } catch (error) {
      res.status(500).json({ message: "Erreur lors de la récupération du service manager", error });
    }
  },

  // 📌 Créer un nouveau service manager
  async createServiceManager(req, res) {
    const session = await mongoose.startSession();
    session.startTransaction();
  
    try {
      console.log("🟢 Début de la création d'un service manager");
      console.log("Données reçues :", req.body);
  
      const { firstName, lastName, email, badgeNumber, departement } = req.body;
  
      // Vérification des données requises
      if (!firstName || !lastName || !email || !badgeNumber || !departement) {
        throw new Error("Données manquantes !");
      }
  
      console.log("✅ Données valides");
  
      // Générer un mot de passe aléatoire (8 caractères)
      const generatedPassword = Math.random().toString(36).slice(-8);
      console.log("🔑 Mot de passe généré :", generatedPassword);
  
      // Hasher le mot de passe avant de l'enregistrer
      const hashedPassword = bcrypt.hashSync(generatedPassword, 10);
  
      // Création et enregistrement de l'utilisateur
      const newUser = new User({ firstName, lastName, email, password: generatedPassword ,role:"service manager"});
      const savedUser = await newUser.save({ session });
  
      console.log("✅ Utilisateur enregistré :", savedUser._id);
  
      // Création et enregistrement du service manager
      const newServiceManager = new ServiceManager({ 
        badgeNumber, departement, user: savedUser._id 
      });
  
      const savedServiceManager = await newServiceManager.save({ session });
      console.log("✅ Service manager enregistré :", savedServiceManager._id);
  
      

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
        subject: " votre compte est crée",
        html: `
         <div>
          <h1>Email de confirmation de creation du compte </h1>
            <h2>Bonjour </h2>
          <a >voisci votre email:${email}</a>  
           <a >voisci votre mot de passe: ${generatedPassword}  </a>                              
           </div>`,
      };
      transport.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Mail sent successfully:-", info.response);
        }
      });
      // Validation de la transaction
      await session.commitTransaction();
      session.endSession();
  
      res.status(201).json({ 
        message: "Service manager et utilisateur enregistrés avec succès", 
        serviceManager: savedServiceManager 
      });

      
  
    } catch (error) {
      await session.abortTransaction();
      session.endSession();
  
      console.error("❌ Erreur lors de l'enregistrement :", error);
      res.status(500).json({ message: "Erreur lors de l'enregistrement", error: error.message });
    }
  },

  // 📌 Mettre à jour un service manager
  async updateServiceManager(req, res) {
    try {
      const { firstName, lastName, email, badgeNumber, departement } = req.body;
  
      // Trouver et mettre à jour le ServiceManager
      const updatedServiceManager = await ServiceManager.findByIdAndUpdate(
        req.params.id,
        { badgeNumber, departement },
        { new: true }
      );
  
      if (!updatedServiceManager) {
        return res.status(404).json({ message: "Service manager non trouvé" });
      }
  
      // Mettre à jour les informations de l'utilisateur associé
      if (updatedServiceManager.user) {
        await User.findByIdAndUpdate(
          updatedServiceManager.user,
          { firstName, lastName, email },
          { new: true }
        );
      }
  
      // Renvoyer l'objet mis à jour
      const finalData = await ServiceManager.findById(req.params.id).populate("user");
      res.json(finalData);
    } catch (error) {
      res.status(500).json({
        message: "Erreur lors de la mise à jour du service manager",
        error: error.message,
      });
    }
  },
  

  // 📌 Supprimer un service manager
  async deleteServiceManager(req, res) {
    try {
      const deletedServiceManager = await ServiceManager.findByIdAndDelete(req.params.id);
      if (!deletedServiceManager) return res.status(404).json({ message: "Service manager non trouvé" });
      res.json({ message: "Service manager supprimé avec succès" });
    } catch (error) {
      res.status(500).json({ message: "Erreur lors de la suppression du service manager", error });
    }
  },
};

module.exports = serviceManagerController;
