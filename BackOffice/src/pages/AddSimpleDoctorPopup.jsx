import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
   Input, Form, ButtonContainer, ProgressBar, NavButton, NextButton, SubmitButton, Line,
  ModalContent, ModalOverlay, CloseButton, Error, Title, StepContainer, Step, InputRow, FormTitle
} from "../styles/PopUpAddDoctor";
import DoctorService from "services/DoctorService";

// Validation schema
const DoctorSchema = z.object({
  firstName: z.string().min(2, { message: "First Name is required (min 2 caractères)" }),
  lastName: z.string().min(2, { message: "Last Name is required (min 2 caractères)" }),
  badgeNumber: z.coerce.number().min(100, { message: "Badge Number must be at least 100" }),
  departement: z.string().min(3, { message: "Departement is required" }),
  speciality: z.string().min(3, { message: "Speciality is required" }),
  emailPerso: z.string().email({ message: "Invalid email format" }),
  phone: z.coerce.number().min(10000000, { message: "Phone number must be at least 8 digits" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" })
});

const steps = [
  { number: 1, label: "Doctor Information" },
  { number: 2, label: "Personal Information" },
];

const AddSimpleDoctorPopup = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(DoctorSchema),
  });

  const nextStep = () => setStep((prev) => Math.min(prev + 1, steps.length));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const formattedData = {
        ...data,
        email: data.emailPerso,
        badgeNumber: parseInt(data.badgeNumber, 10),
        phone: parseInt(data.phone, 10),
      };

      if (isNaN(formattedData.badgeNumber) || isNaN(formattedData.phone)) {
        alert('Please provide valid numbers for badge number and phone.');
        return;
      }

      // Envoi des données à l'API
      await DoctorService.createDoctor(formattedData);
      alert("✅ Doctor added successfully!");
      
      onClose(); // Fermer le modal
      window.location.reload(); // Rafraîchir la page pour afficher les nouvelles données
    } catch (error) {
      console.error("Error creating doctor:", error);
      alert(`Error: ${error.response ? error.response.data.message : "Unknown error"}`);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent as={motion.div} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}>
        <CloseButton onClick={onClose}>✖</CloseButton>
        <Title>Add NEW Doctor</Title>

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

        <Form onSubmit={(e) => { e.preventDefault(); handleSubmit(onSubmit)(e); }}>
          {step === 1 && (
            <>
              <FormTitle>Doctor Information</FormTitle>
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
              <InputRow>
                <div>
                  <Input type="number" {...register("badgeNumber")} placeholder="Badge Number" />
                  <Error>{errors.badgeNumber?.message}</Error>
                </div>
                <div>
                  <Input type="text" {...register("departement")} placeholder="Department" />
                  <Error>{errors.departement?.message}</Error>
                </div>
              </InputRow>
              <div>
                <Input type="text" {...register("speciality")} placeholder="Speciality" />
                <Error>{errors.speciality?.message}</Error>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <FormTitle>Personal Information</FormTitle>
              <InputRow>
                <div>
                  <Input type="email" {...register("emailPerso")} placeholder="Email" />
                  <Error>{errors.emailPerso?.message}</Error>
                </div>
                <div>
                  <Input type="number" {...register("phone")} placeholder="Phone" />
                  <Error>{errors.phone?.message}</Error>
                </div>
              </InputRow>
              <div>
                <Input type="password" {...register("password")} placeholder="Password" />
                <Error>{errors.password?.message}</Error>
              </div>
            </>
          )}

          <ButtonContainer>
            {step > 1 && <NavButton type="button" onClick={prevStep}>Back</NavButton>}
            {step < steps.length ? (
              <NextButton type="button" style={step === 1 ? { marginLeft: "auto" } : {}} onClick={nextStep}>
                Next →
              </NextButton>
            ) : (
              <SubmitButton type="submit" disabled={loading}>
                {loading ? "Submitting..." : "Submit"}
              </SubmitButton>
            )}
          </ButtonContainer>
        </Form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default AddSimpleDoctorPopup;