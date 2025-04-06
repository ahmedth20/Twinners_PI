import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  GlobalStyles, Input, Form, ButtonContainer, ProgressBar, NavButton, NextButton, SubmitButton, Line,
  ModalContent, ModalOverlay, CloseButton,Error, Title, StepContainer, Step, InputRow, Select, FormTitle
} from "../styles/PopUpAddPatient";
import PatientService from "../services/PatientService";

// ✅ Définition du schéma de validation avec Zod
const patientSchema = z.object({
  firstName: z.string().min(2, { message: "First Name is required (min 2 caractères)" }),
  lastName: z.string().min(2, { message: "Last Name is required (min 2 caractères)" }),
  email: z.string().email({ message: "Invalid email format" }),
  sex: z.enum(["Male", "Female"], { message: "Select a valid gender" }),
  age: z.preprocess((val) => Number(val), z.number().min(1, { message: "Age must be at least 1" }).max(120, { message: "Invalid age" })),
  phone: z.string().min(8, { message: "Phone number must be at least 8 digits" }),
  address: z.string().min(5, { message: "Address is required" }),
});

const steps = [
  { number: 1, label: "User Information" },
  { number: 2, label: "Personal Information" },
];

const AddSimplePatientPopup = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(patientSchema),
  });

  const nextStep = () => setStep((prev) => Math.min(prev + 1, steps.length));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const onSubmit = async (data) => {
    try {
      await PatientService.createSimplePatient(data);
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
        <Title>Add NEW Patient</Title>

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
            </>
          )}

          {step === 2 && (
            <>
              <FormTitle>Personal Information</FormTitle>
              <InputRow>
               
              </InputRow>

              <InputRow>
                <div>
                  <Input type="number" {...register("age")} placeholder="Age" />
                  <Error>{errors.age?.message}</Error>
                </div>
                <div>
                  <Input type="text" {...register("phone")} placeholder="Phone" />
                  <Error>{errors.phone?.message}</Error>
                </div>
              </InputRow>
              <div>
                <Input type="text" {...register("address")} placeholder="Address" />
                <Error>{errors.address?.message}</Error>
              </div>
              <div>
                  <Select {...register("sex")}>
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </Select>
                  <Error>{errors.sex?.message}</Error>
                </div>
            </>
          )}

          <ButtonContainer>
            {step > 1 && <NavButton type="button" onClick={prevStep}>Back</NavButton>}
            {step < steps.length ? (
              <NextButton type="button" style={step === 1 ? { marginLeft: "auto" } : {}} onClick={nextStep}>Next →</NextButton>
            ) : (
              <SubmitButton type="submit">Submit</SubmitButton>
            )}
          </ButtonContainer>
        </Form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default AddSimplePatientPopup;
