const Prescription = require("../models/prescription");
const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");
const prescriptionController = {
  // 🔹 Créer une prescription
async createPrescription(req, res) {
    try {
      const reference = Math.floor(100000 + Math.random() * 900000); // Génération aléatoire
      const dateIssued = new Date(); // Date système

      const prescription = new Prescription({
        reference,
        dateIssued,
        medications: req.body.medications,
        medicalRecord: req.body.medicalRecord,
      });

      const savedPrescription = await prescription.save();
      res.status(201).json(savedPrescription);
    } catch (error) {
      res.status(500).json({
        message: "Erreur lors de la création de la prescription",
        error,
      });
    }
  },
  // 🔹 Récupérer les prescriptions par ID de dossier médical
  async getPrescriptionsByMedicalRecordId(req, res) {
    try {
      const { medicalRecordId } = req.params;
      const prescriptions = await Prescription.find({ medicalRecord: medicalRecordId })
        .populate("medicalRecord", "reference patient");

      if (!prescriptions || prescriptions.length === 0) {
        return res.status(404).json({ message: "Aucune prescription trouvée pour ce dossier médical." });
      }

      res.status(200).json(prescriptions);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erreur serveur", error });
    }
  },

async generatePrescriptionPDF(req, res) {
    try {
      const { id } = req.params;
      const prescription = await Prescription.findById(id).populate(
        "medicalRecord",
        "reference patient"
      );

      if (!prescription) {
        return res.status(404).json({ message: "Prescription introuvable" });
      }

      // Chemin du fichier PDF
      const fileName = `Prescription_${prescription.reference}.pdf`;
      const filePath = path.join(__dirname, "../pdfs", fileName);

      // Crée le document PDF
      const pdfDoc = new PDFDocument();
      pdfDoc.pipe(fs.createWriteStream(filePath));

      // 🔹 Contenu du PDF
      pdfDoc.fontSize(20).text("Prescription Médicale", { align: "center" });
      pdfDoc.moveDown();
      pdfDoc.fontSize(14).text(`Référence : ${prescription.reference}`);
      pdfDoc.text(`Date d'émission : ${prescription.dateIssued.toLocaleDateString()}`);
      pdfDoc.text(`Dossier médical : ${prescription.medicalRecord?.reference}`);
      pdfDoc.moveDown();
      pdfDoc.text("Liste des médicaments :");
      pdfDoc.moveDown();

      prescription.medications.forEach((med, index) => {
        pdfDoc.text(`${index + 1}. Médicament : ${med.medication}`);
        pdfDoc.text(`   ➡ Instruction de dosage : ${med.dosageInstruction}`);
        pdfDoc.moveDown();
      });

      pdfDoc.end();

      // 🔹 Retourner le lien de téléchargement
      res.status(200).json({
        message: "PDF généré avec succès.",
        downloadLink: `http://localhost:5000/prescription/download/${fileName}`,
      });
    } catch (error) {
      res.status(500).json({
        message: "Erreur lors de la génération du PDF",
        error,
      });
    }
  },




async getAllPrescriptions(req, res) {
    try {
      const prescriptions = await Prescription.find()
        .populate("medicalRecord", "reference patient");
      res.status(200).json(prescriptions);
    } catch (error) {
      res.status(500).json({ message: "Erreur lors de la récupération des prescriptions", error });
    }
  },

  // 🔹 Récupérer une prescription par ID
  async getPrescriptionById(req, res) {
    try {
      const prescription = await Prescription.findById(req.params.id)
        .populate("medicalRecord", "reference patient");

      if (!prescription) return res.status(404).json({ message: "Prescription introuvable" });
      res.status(200).json(prescription);
    } catch (error) {
      res.status(500).json({ message: "Erreur lors de la récupération de la prescription", error });
    }
  },

  // 🔹 Mettre à jour une prescription
  async updatePrescription(req, res) {
    try {
      const prescription = await Prescription.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!prescription) return res.status(404).json({ message: "Prescription non trouvée" });
      res.status(200).json(prescription);
    } catch (error) {
      res.status(500).json({ message: "Erreur lors de la mise à jour de la prescription", error });
    }
  },

  // 🔹 Supprimer une prescription
  async deletePrescription(req, res) {
    try {
      const result = await Prescription.findByIdAndDelete(req.params.id);
      if (!result) return res.status(404).json({ message: "Prescription non trouvée" });
      res.status(200).json({ message: "Prescription supprimée avec succès" });
    } catch (error) {
      res.status(500).json({ message: "Erreur lors de la suppression de la prescription", error });
    }
  },

};

module.exports = prescriptionController;
