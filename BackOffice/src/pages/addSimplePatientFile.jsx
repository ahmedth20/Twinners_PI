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

  const {
    register,
    handleSubmit,
    formState: { errors },
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
      await PatientFileService.createSimplePatientFile(data);

      alert("✅ Fichier patient ajouté avec succès !");
      sendNotification(data);
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
