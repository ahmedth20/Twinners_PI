import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
   Input, Form,  SubmitButton, 
  ModalContent, ModalOverlay, CloseButton,Error, Title,  InputRow,  FormTitle
} from "../styles/PopUpAddPatient";
import PatientService from "../services/ServiceMangerService";

// ✅ Définition du schéma de validation avec Zod
const patientSchema = z.object({
  firstName: z.string().min(2, { message: "First Name is required (min 2 caractères)" }),
  lastName: z.string().min(2, { message: "Last Name is required (min 2 caractères)" }),
  email: z.string().email({ message: "Invalid email format" }),
  badgeNumber: z.string().min(2,{message: "badgeNumber is required (min 2 caractères)" }),

  departement: z.string().min(2, { message: "departement is required (min 2 caractères)" }),

});



const AddSimplePatientPopup = ({ isOpen, onClose }) => {
  const [step] = useState(1);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(patientSchema),
  });

  const onSubmit = async (data) => {
    try {
      await PatientService.createServiceManager(data);
      alert("✅ Patient ajouté avec succès !");
      onClose();
    } catch (error) {
      alert("❌ Erreur lors de l'ajout du patient.");
      console.error("Détails de l'erreur :", error.response?.data);
    }
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent as={motion.div} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}>
        <CloseButton onClick={onClose}>✖</CloseButton>
        <Title>Add NEW Service Manager</Title>

        

        <Form onSubmit={handleSubmit(onSubmit)}>
          {step === 1 && (
            <>
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
                <Input type="text" {...register("email")} placeholder="Email" />
                <Error>{errors.email?.message}</Error>
              </div>
              <div>
                <Input  {...register("badgeNumber")} placeholder="badgeNumber" />
                <Error>{errors.badgeNumber?.message}</Error>
              </div>
              
              <div>
                <Input type="text" {...register("departement")} placeholder="departement" />
                <Error>{errors.departement?.message}</Error>
              </div>
              
              <div style={{ marginTop: "11px" }}>
              <SubmitButton type="submit">Submit</SubmitButton>
              </div>
            </>
          )}

        

         
        </Form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default AddSimplePatientPopup;
