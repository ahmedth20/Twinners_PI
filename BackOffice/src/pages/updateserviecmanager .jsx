import React, { useState,useEffect } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  GlobalStyles, Input, Form, ButtonContainer, ProgressBar, NavButton, NextButton, SubmitButton, Line,
  ModalContent, ModalOverlay, CloseButton,Error, Title, StepContainer, Step, InputRow, Select, FormTitle
} from "../styles/PopUpAddPatient";
import PatientService from "../services/ServiceMangerService";
import { margin } from "polished";

// ✅ Définition du schéma de validation avec Zod
const patientSchema = z.object({
  firstName: z.string().min(2, { message: "First Name is required (min 2 caractères)" }),
  lastName: z.string().min(2, { message: "Last Name is required (min 2 caractères)" }),
  email: z.string().email({ message: "Invalid email format" }),
  badgeNumber: z.string().min(2,{message: "badgeNumber is required (min 2 caractères)" }),

  departement: z.string().min(2, { message: "departement is required (min 2 caractères)" }),

});

const steps = [
  { number: 1, label: "User Information" },
  { number: 2, label: "Personal Information" },
];

const AddSimplePatientPopup = ({ isOpen, onClose, existingUser }) => {
  const [step, setStep] = useState(1);
  
  const {
    register,
    handleSubmit,
    setValue, // Permet de pré-remplir les champs
    formState: { errors },
} = useForm({
    resolver: zodResolver(patientSchema),
});

useEffect(() => {
    if (existingUser) {
        setValue("firstName", existingUser.user?.firstName || '');
        setValue("lastName", existingUser.user?.lastName || '');
        setValue("badgeNumber", existingUser.badgeNumber || '');
        setValue("departement", existingUser.departement || '');
    }
}, [existingUser, setValue]);


  const nextStep = () => setStep((prev) => Math.min(prev + 1, steps.length));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const onSubmit = async (data) => {
    try {
      await PatientService.updateServiceManager(existingUser._id, data);
      alert("✅ Service Manager mis à jour avec succès !");
      onClose();
    } catch (error) {
      alert("❌ Erreur lors de la mise à jour.");
      console.error("Détails de l'erreur :", error.response?.data);
    }
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay>
    <ModalContent as={motion.div} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}>
      <CloseButton onClick={onClose}>✖</CloseButton>
      <Title>Update Service Manager</Title>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormTitle>User Information</FormTitle>
        <InputRow>
          <div>
            <Input type="text" {...register("firstName")} placeholder="First Name" />
            <Error>{errors.firstName?.message}</Error>
          </div>
          <div>
            <Input type="text" {...register("lastName")} placeholder="Last Name" />
            <Error>{errors.lastName?.message}</Error>
          </div>
        </InputRow>
       
        <div>
          <Input type="text" {...register("badgeNumber")} placeholder="Badge Number" />
          <Error>{errors.badgeNumber?.message}</Error>
        </div>
        <div>
          <Input type="text" {...register("departement")} placeholder="Departement" />
          <Error>{errors.departement?.message}</Error>
        </div>

        <div style={{ marginTop: "11px" }}>
          <SubmitButton type="submit">Update</SubmitButton>
        </div>
      </Form>
    </ModalContent>
  </ModalOverlay>
  );
};

export default AddSimplePatientPopup;
