import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";

import {
  Input, Form, ButtonContainer, ProgressBar, NavButton, NextButton, SubmitButton, Line,
  ModalContent, ModalOverlay, CloseButton, Error, Title, StepContainer, Step, InputRow, Select, FormTitle, TextArea
} from "../styles/PopUpAddPatientFile";
import PatientFileService from "../services/PatientFileService";

import axios from "axios"; // si pas déjà importé
import io from 'socket.io-client';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import openaiService from "services/openaiServices";


const socket = io('http://localhost:5000', {
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 1000,
  reconnectionDelayMax: 5000,
});

// ✅ Nouveau schéma de validation
const patientFileSchema = z.object({
  phoneNumber: z.string().min(8, { message: "Numéro de téléphone requis" }),
  age: z.coerce.number().min(0, { message: "Âge requis" }),
  gender: z.enum(["Male", "Female", "Other"], { message: "Genre requis" }),
  address: z.string().min(5, { message: "Adresse requise" }),
  height: z.coerce.number().min(1, { message: "Taille requise" }),
  weight: z.coerce.number().min(1, { message: "Poids requis" }),
  allergies: z.string().min(2, { message: "Allergies requises" }),
  medicalHistory: z.string().min(2, { message: "Antécédents requis" }),
  symptom: z.string().min(2, { message: "Symptôme requis" }),
  bloodGroup: z.string().min(1, { message: "Groupe sanguin requis" }),
  paramedic: z.string().min(1, { message: "ID du paramédical requis" }),
  medicalRecord: z.string().min(1, { message: "ID du dossier médical requis" }),
});

const steps = [
  { number: 1, label: "Informations PatientFile" },
  { number: 2, label: "Détails Supplémentaires" },
];

const AddSimplePatientFilePopup = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [waitingForResponse, setWaitingForResponse] = useState(false);
  const [medicalRecords, setMedicalRecords] = useState([]);
  const [loading, setLoading] = useState(true);

  // Récupérer l'ID du paramedic depuis l'utilisateur connecté
 /* const token = useSelector((state) => state.auth.token); // Assurez-vous que le token est stocké dans Redux

  let paramedicId = '';

  try {
    if (typeof token === 'string' && token.trim() !== '') {
      const decoded = jwtDecode(token);
      paramedicId = decoded.userId || '';
    }
  } catch (error) {
    console.error("Erreur lors du décodage du token :", error.message);
  }*/
const paramedicId=useSelector(state => state.auth.user.user.id); 
console.log(paramedicId);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: zodResolver(patientFileSchema),
  });

  const nextStep = () => setStep((prev) => Math.min(prev + 1, steps.length));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const sendNotification = async (consultationData) => {
    console.log("Envoi des données de la consultation :", consultationData);  // Vérifiez ici
    socket.emit('notif', consultationData);
  };

  const onSubmit = async (data) => {

    try {
          if (!paramedicId) {
        alert("❌ Aucun paramédic connecté. Veuillez vous reconnecter.");
        return;
      }

      // Ajouter l'ID du paramédic aux données envoyées
      const formData = {
        ...data,
        paramedic: paramedicId,
      };
    await PatientFileService.createSimplePatientFile(data);
const specialty = await openaiService.getSpeciality(data);
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
      
      const medicalResponse = await axios.get(`http://localhost:5000/medicalrecord/${data.medicalRecord}`);
      const medical = medicalResponse.data; // On prend le premier disponible
      console.log(medicalResponse.data); // On prend le premier disponible
     
      const consultationData = {
        duration: 30,  // Exemple de durée, tu peux la personnaliser
        date: new Date(),
        status: "Planned",  // Statut initial
        diagnostic: {},  // Diagnostic, tu peux ajouter des données ici
        patient: medicalResponse.data.patient._id,  // Assure-toi que l'ID patient est bien récupéré
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
            console.log(data.patient._id);
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

      alert("✅ Fichier patient ajouté avec succès !");
      sendNotification(consultationData);
      onClose();
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message || "Erreur inconnue";
      alert("❌ Erreur lors de l'ajout du fichier patient : " + errorMessage);
      console.error("Détails de l'erreur:", errorMessage);
    }
  };

  // Charger les dossiers médicaux depuis l'API
  useEffect(() => {
    const fetchMedicalRecords = async () => {
      try {
        const response = await fetch('http://localhost:5000/medicalrecord', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          setMedicalRecords(data);
        } else {
          console.error("Erreur lors de la récupération des dossiers médicaux :", response.status);
        }
        setLoading(false);
      } catch (error) {
        console.error("Erreur lors de la récupération des dossiers médicaux :", error);
        setLoading(false);
      }
    };
    fetchMedicalRecords();
  }, []);


  // Mettre le paramedicId dans le formulaire
  useEffect(() => {
    setValue('paramedic', paramedicId);
  }, [paramedicId, setValue]);

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent as={motion.div} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}>
        <CloseButton onClick={onClose}>✖</CloseButton>
        <Title>Ajouter un nouveau PatientFile</Title>

        <ProgressBar>
          {steps.map(({ number, label }, index) => (
            <React.Fragment key={index}>
              <StepContainer>
                <Step active={step >= number}>{number}</Step>
                <span>{label}</span>
              </StepContainer>
              {index < steps.length - 1 && <Line />}
            </React.Fragment>
          ))}
        </ProgressBar>

        <Form onSubmit={handleSubmit(onSubmit)}>
          {step === 1 && (
            <>
              <FormTitle>Informations Générales</FormTitle>
              <InputRow>
                <div>
                  <Input type="text" {...register("phoneNumber")} placeholder="Numéro de téléphone" />
                  <Error>{errors.phoneNumber?.message}</Error>
                </div>
                <div>
                  <Input type="number" {...register("age")} placeholder="Âge" />
                  <Error>{errors.age?.message}</Error>
                </div>
              </InputRow>
              <InputRow>
                <div>
                  <Select {...register("gender")}>
                    <option value="">Genre</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Autre</option>
                  </Select>
                  <Error>{errors.gender?.message}</Error>
                </div>
                <div>
                  <Input type="text" {...register("address")} placeholder="Adresse" />
                  <Error>{errors.address?.message}</Error>
                </div>
              </InputRow>
              <InputRow>
                <div>
                  <Input type="number" {...register("height")} placeholder="Taille (cm)" />
                  <Error>{errors.height?.message}</Error>
                </div>
                <div>
                  <Input type="number" {...register("weight")} placeholder="Poids (kg)" />
                  <Error>{errors.weight?.message}</Error>
                </div>
              </InputRow>
            </>
          )}

          {step === 2 && (
            <>
              <FormTitle>Détails Médicaux</FormTitle>
              <div>
                <Input type="text" {...register("allergies")} placeholder="Allergies" />
                <Error>{errors.allergies?.message}</Error>
              </div>
              <div>
                <TextArea {...register("medicalHistory")} placeholder="Antécédents médicaux" />
                <Error>{errors.medicalHistory?.message}</Error>
              </div>
              <div>
                <TextArea {...register("symptom")} placeholder="Symptômes actuels" />
                <Error>{errors.symptom?.message}</Error>
              </div>
              <div>
                <Input type="text" {...register("bloodGroup")} placeholder="Groupe sanguin" />
                <Error>{errors.bloodGroup?.message}</Error>
              </div>
              <InputRow>

                <div>
                  <Select {...register("medicalRecord")}>
                    <option value="">Sélectionner un dossier médical</option>
                    {!loading && medicalRecords.map((record) => (
                      <option key={record._id} value={record._id}>
                        {record.reference} {/* ou une autre propriété, selon ton modèle */}
                      </option>
                    ))}
                  </Select>


                  <Error>{errors.medicalRecord?.message}</Error>
                </div>
              </InputRow>
            </>
          )}

          <ButtonContainer>
            {step > 1 && <NavButton type="button" onClick={prevStep}>Retour</NavButton>}
            {step < steps.length ? (
              <NextButton type="button" style={step === 1 ? { marginLeft: "auto" } : {}} onClick={nextStep}>Suivant →</NextButton>
            ) : (
              <SubmitButton type="submit">Soumettre</SubmitButton>
            )}
          </ButtonContainer>
        </Form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default AddSimplePatientFilePopup;
