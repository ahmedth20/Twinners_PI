import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Input, Form, ButtonContainer, ProgressBar, NavButton, NextButton, SubmitButton, Line,
  ModalContent, ModalOverlay, CloseButton, Error, Title, StepContainer, Step, InputRow, Select, FormTitle, TextArea
} from "../styles/PopUpAddPatientFile";
import PatientFileService from "../services/PatientFileService";

import io from 'socket.io-client';

const socket = io('http://localhost:5000', {
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 1000,
  reconnectionDelayMax: 5000,
});
// ✅ Nouveau schéma de validation
const patientFileSchema = z.object({
  dateIssued: z.string().min(1, { message: "La date d'émission est requise" }),
  description: z.string().min(5, { message: "La description est requise (min 5 caractères)" }),
  symptoms: z.string().min(5, { message: "Les symptômes sont requis (min 5 caractères)" }),
  emergencyLevel: z.enum(["low", "moderate", "critical"], { message: "Veuillez sélectionner un niveau d'urgence" }),
  paramedic: z.string().min(1, { message: "L'ID du paramédical est requis" }),
  medicalRecord: z.string().min(1, { message: "L'ID du dossier médical est requis" }),
});

const steps = [
  { number: 1, label: "Informations PatientFile" },
  { number: 2, label: "Détails Supplémentaires" },
];

const AddSimplePatientFilePopup = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [waitingForResponse, setWaitingForResponse] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(patientFileSchema),
  });

  const nextStep = () => setStep((prev) => Math.min(prev + 1, steps.length));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));
  
  const calldoctor = (doctor) => {
    const payload = {
        doctorId: "68078b941a7b42ecb972fa89",
        from: socket.id,
    };

    console.log("Envoi de la demande au médecin avec les données: ", payload); // Vérifie l'objet envoyé

    socket.emit('call_doctors', payload);
    console.log("Demande envoyée :", payload); // Affiche dans la console la demande envoyée
    localStorage.setItem('doctorId', "68078b941a7b42ecb972fa89");
    localStorage.setItem('waitingForResponse', 'true');
    setWaitingForResponse(true); // Changement d'état pour bloquer le bouton
};


  const onSubmit = async (data) => {
    try {
      await PatientFileService.createSimplePatientFile(data);
  
      alert("✅ Fichier patient ajouté avec succès !");
      calldoctor(data);
      onClose();
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message || "Erreur inconnue";
      alert("❌ Erreur lors de l'ajout du fichier patient : " + errorMessage);
      console.error("Détails de l'erreur:", errorMessage);
    }
  };
  
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
              <FormTitle>Informations Patient File</FormTitle>
              <InputRow>
                <div>
                  <Input type="date" {...register("dateIssued")} placeholder="Date d'émission" />
                  <Error>{errors.dateIssued?.message}</Error>
                </div>
              </InputRow>
              <div>
                <TextArea {...register("description")} placeholder="Description" />
                <Error>{errors.description?.message}</Error>
              </div>
              <div>
                <TextArea {...register("symptoms")} placeholder="Symptômes" />
                <Error>{errors.symptoms?.message}</Error>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <FormTitle>Détails Supplémentaires</FormTitle>
              <div>
                <Select {...register("emergencyLevel")}>
                  <option value="">Sélectionner le niveau d'urgence</option>
                  <option value="low">Faible</option>
                  <option value="moderate">Modéré</option>
                  <option value="critical">Critique</option>
                </Select>
                <Error>{errors.emergencyLevel?.message}</Error>
              </div>
              <InputRow>
                <div>
                  <Input type="text" {...register("paramedic")} placeholder="ID du paramédical" />
                  <Error>{errors.paramedic?.message}</Error>
                </div>
                <div>
                  <Input type="text" {...register("medicalRecord")} placeholder="ID du dossier médical" />
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
