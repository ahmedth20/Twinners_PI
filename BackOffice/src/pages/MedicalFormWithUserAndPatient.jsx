import React from "react";
import Page from "layout/Page";
import {
  Container, Title, SectionTitle, Row, Column, Input, Select, TextArea,Button
} from "../styles/medicalForm";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import axios from "axios"; // si pas déjà importé
import io from 'socket.io-client';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import openaiService from "services/openaiServices";
const socket = io('http://localhost:5000');
async function predictEmergencyLevel(patientData) {
  try {
    const response = await axios.post('http://127.0.0.1:5001/predict', patientData);
    console.log('Niveau d\'urgence prédit :', response.data.emergencyLevel);
    return response.data.emergencyLevel;
  } catch (error) {
    console.error('Erreur lors de la prédiction :', error.message);
    throw error;
  }
}


const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  dateOfBirth: z.string().min(1, "Date of Birth is required"),
  gender: z.enum(["Male", "Female", "Other"]),
  address: z.string().min(1, "Address is required"),
  dateIssued: z.string().min(1, "Date is required"),
  description: z.string().optional(),
  symptoms: z.string().min(1, "Symptoms are required"),
  allergies: z.string().optional(),
  MedicalHistory: z.string().optional(), // Historique médical (optionnel)
  emergencyLevel: z.enum(["low", "moderate", "critical"]).optional(),
  testResults: z.object({
    chestXray: z.string().optional(),
    bloodTest: z.string().optional(),
    oxygenSaturation: z.string().optional(),
  }).optional(),
});

const MedicalFormWithUserAndPatient = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(formSchema),
  });

  const navigate = useNavigate();
  const sendNotification = async (consultationDataDetails) => {
    console.log("Envoi des données de la consultation :", consultationDataDetails);  // Vérifiez ici
    socket.emit('send_notification', consultationDataDetails);
  };
const onSubmit = async (data) => {
  const gender = data.gender; // Récupérer tel quel pour le backend
  const genderMap = {
    Male: 0,
    Female: 1
  };

  const age = new Date().getFullYear() - new Date(data.dateOfBirth).getFullYear();


  // Préparer les données pour la prédiction
  const predictionInput = {
    age: age,
    gender: genderMap[gender], // utiliser 0 ou 1 pour la prédiction
    oxygenSaturation: parseFloat(data.testResults?.oxygenSaturation ),
    bloodTest: parseFloat(data.testResults?.bloodTest ),
    chestXray: parseFloat(data.testResults?.chestXray ),
  };

  try {
    const predictedLevel = await predictEmergencyLevel(predictionInput);
    console.log("✅ Niveau d'urgence prédit :", predictedLevel);

    // Données à envoyer au backend
    const finalData = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      sex: gender, // ⬅️ garder la valeur littérale ici ("Male", "Female")
      age: age,
      phone: data.phone,
      address: data.address,
      dateIssued: data.dateIssued,
      symptoms: data.symptoms,
      diagnostic:{
        symptoms: data.symptoms,
      },
      allergies: data.allergies,
      MedicalHistory: data.MedicalHistory,
      description: data.description,
      emergencyLevel: predictedLevel,
      testResults: {
        chestXray: predictionInput.chestXray,
        bloodTest: predictionInput.bloodTest,
        oxygenSaturation: predictionInput.oxygenSaturation,
      },
    };
console.log(finalData)
    const response = await fetch("http://localhost:5000/patient/createSimplePatient1", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(finalData),
    });

      const result = await response.json();

       const specialty = await openaiService.getSpeciality(result);
      const specialtyCleaned = specialty.specialty.split(" ")[0];
      console.log("Spécialité devinée (nettoyée) :", specialtyCleaned);
      // Appel pour trouver un médecin disponible avec cette spécialité
      const doctorResponse = await axios.get(`http://localhost:5000/doctors/specialtyy/${specialtyCleaned}`);
      const doctor = doctorResponse.data; // On prend le premier disponible
      console.log("Médecin trouvé :", doctor);

      // Récupération d'une salle d'urgence aléatoire dans le même département
      console.log(doctor.departement);
      const roomResponse = await axios.get(`http://localhost:5000/emergencyrooms/randomfront/${doctor.departement}`);
      const room = roomResponse.data; // On prend le premier disponible
     
      //const room = await emergencyRoomService.getRandomEmergencyRoomByDepartement(doctor.departement);
      console.log("Salle d'urgence trouvée :", room);
       
      const consultationData = {
        duration: 30,  // Exemple de durée, tu peux la personnaliser
        date: new Date(),
        status: "Planned",  // Statut initial
        diagnostic: {},  // Diagnostic, tu peux ajouter des données ici
        patient: result.patient._id,  // Assure-toi que l'ID patient est bien récupéré
        doctor: doctor._id,  // ID du médecin
        emergencyRoom: room._id  // ID de la salle d'urgence
      };
  
      console.log("Données de la consultation :", consultationData);
       const createdConsultation = await axios.post("http://localhost:5000/consultation", consultationData);
      console.log("Consultation créée avec succès :", createdConsultation.data);
  
      alert("✅ Patient ajouté avec succès !");

      await axios.put(`http://localhost:5000/doctors/${doctor._id}`, { availability: false });
      console.log(`Médecin ${doctor._id} mis à jour à disponibilité: false`);

      const newCapacity = room.capacity - 1;
      const emergencyRoomUpdate = {
        capacity: newCapacity,
        availability: newCapacity > 0 // dispo seulement s'il reste de la place
      };

      await axios.put(`http://localhost:5000/emergencyrooms/${room._id}`, emergencyRoomUpdate);
      
      console.log(`Salle d'urgence ${room._id} mise à jour avec capacité: ${newCapacity} et disponibilité: ${emergencyRoomUpdate.availability}`);
            const consultation = createdConsultation.data;
            const doctorResponses = await axios.get(`http://localhost:5000/doctors/${createdConsultation.data.doctor}`);
            const patientResponse = await axios.get(`http://localhost:5000/patient/details/${createdConsultation.data.patient}`);
            const roomResponses = await axios.get(`http://localhost:5000/emergencyrooms/${createdConsultation.data.emergencyRoom}`);

            const doctorName = `${doctorResponses.data.user.firstName} ${doctorResponses.data.user.lastName}`;
            const patientName = `${patientResponse.data.user.firstName} ${patientResponse.data.user.lastName}`;
            const roomNumber = roomResponses.data.reference;
            console.log(result.patient._id);
            console.log(createdConsultation.data._id);
          
            
            const consultationDataDetails = {
              duration: 30,  // Exemple de durée, tu peux la personnaliser
              date: new Date(),
              status: "Planned",  // Statut initial
              diagnostic: {},  // Diagnostic, tu peux ajouter des données ici
              patient: `${patientResponse.data.user.firstName} ${patientResponse.data.user.lastName}`,  // Assure-toi que l'ID patient est bien récupéré
              emergencyRoom: roomResponses.data.reference  // ID de la salle d'urgence
            };
            sendNotification(consultationDataDetails);
      
       toast.success(
              <div>
                <p><strong>👤 Patient:</strong> {patientName}</p>
                <p><strong>🚑 Doctor:</strong> {doctorName}</p>
                <p><strong>🏥 Emergency Room:</strong> Room #{roomNumber}</p>
                <p><strong>🕒 Duration:</strong> {consultation.duration} minutes</p>
                <p><strong>📅 Date:</strong> {new Date(consultation.date).toLocaleString()}</p>
              </div>,
              { position: "top-center", autoClose: false }
            );
 
      navigate("/patients");
      console.log("✅ Patient with file created:", result);
    
  } catch (error) {
    console.error("❌ Network or server error:", error);
  }
};





  const FormSection = ({ title, children }) => (
    <div>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </div>
  );

  return (
    <Page title="Medical Form">
      <Container>
        <Title>Medical Form</Title>

        <FormSection title="User Information">
          <Row>
            <Column>
              <Input {...register("firstName")} placeholder="First Name" />
              {errors.firstName && <p>{errors.firstName.message}</p>}
            </Column>
            <Column>
              <Input {...register("lastName")} placeholder="Last Name" />
              {errors.lastName && <p>{errors.lastName.message}</p>}
            </Column>
          </Row>
          <Row>
            <Column>
              <Input {...register("email")} placeholder="Email" type="email" />
              {errors.email && <p>{errors.email.message}</p>}
            </Column>
          </Row>
        </FormSection>

        <FormSection title="Patient Information">
          <Row>
            <Column>
              <Input {...register("dateOfBirth")} placeholder="Date of Birth" type="date" />
              {errors.dateOfBirth && <p>{errors.dateOfBirth.message}</p>}
            </Column>
            <Column>
              <Select {...register("gender")}>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </Select>
              {errors.gender && <p>{errors.gender.message}</p>}
            </Column>
          </Row>
          <Row>
            <Column>
              <Input {...register("address")} placeholder="Address" />
              {errors.address && <p>{errors.address.message}</p>}
            </Column>
          </Row>
        </FormSection>

        <FormSection title="Patient File Information">
          <Row>
            <Column>
              <Input {...register("dateIssued")} placeholder="Date Issued" type="date" />
              {errors.dateIssued && <p>{errors.dateIssued.message}</p>}
            </Column>
            <Column>
              <TextArea {...register("description")} placeholder="Description" />
              {errors.description && <p>{errors.description.message}</p>}
            </Column>
          </Row>
          <Row>
            <Column>
              <Input {...register("symptoms")} placeholder="Symptoms" />
              {errors.symptoms && <p>{errors.symptoms.message}</p>}
            </Column>
            <Column>
              <Input {...register("allergies")} placeholder="allergies" />
              {errors.allergies && <p>{errors.allergies.message}</p>}
            </Column>
            <Column>
              <Input {...register("MedicalHistory")} placeholder="MedicalHistory" />
              {errors.MedicalHistory && <p>{errors.MedicalHistory.message}</p>}
            </Column>
          </Row>
        </FormSection>

        <FormSection title="Test Results">
          <Row>
            <Column>
              <Input {...register("testResults.chestXray")} placeholder="Chest X-ray" />
            </Column>
            <Column>
              <Input {...register("testResults.bloodTest")} placeholder="Blood Test" />
            </Column>
          </Row>
          <Row>
            <Column>
              <Input {...register("testResults.oxygenSaturation")} placeholder="Oxygen Saturation" />
            </Column>
          </Row>
        </FormSection>

        <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
      </Container>
    </Page>
  );
};

export default MedicalFormWithUserAndPatient;

