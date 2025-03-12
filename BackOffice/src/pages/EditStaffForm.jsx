import React, { useState } from "react";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import Page from "@layout/Page";
import StaffService from "../services/StaffService";
import { 
  GlobalStyles, Input, DisabledBackground, Form, ButtonContainer, 
  Line, ProgressBar, NavButton, NextButton, SubmitButton, Container, 
  AddButton, ModalContent, ModalOverlay, CloseButton, Title, StepContainer, Step, 
  InputRow, ButtonRow, Select, FormTitle
} from "../styles/PopUpAddStaff";

const steps = [
  { number: 1, label: "Personal Information" },
  { number: 2, label: "Job Information" },
  { number: 3, label: "Final Submission" }
];

const EditStaffForm = ({ staffData, closeForm }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: staffData?.user?.firstName || '',
    lastName: staffData?.user?.lastName || '',
    email: staffData?.user?.email || '',
    password: "",
    badgeNumber: staffData?.badgeNumber || '',
    service: staffData?.service || '',
  });

  // Mise à jour des champs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Vérification des champs nécessaires avant de soumettre
    if (!formData.firstName || !formData.lastName || !formData.email) {
        alert("Tous les champs d'information personnelle sont requis.");
        return;
    }

    if (!formData.badgeNumber || !formData.service) {
        alert("Les informations liées au travail sont requises.");
        return;
    }

    try {
        // Vérifie que l'ID du personnel et l'ID de l'utilisateur sont valides
        if (!staffData?._id || !staffData.user?._id) {
            console.error("Erreur : L'ID du personnel ou de l'utilisateur est manquant ou invalide !");
            alert("Erreur : L'ID du personnel ou de l'utilisateur est manquant ou invalide !");
            return;
        }

        console.log("staffData", staffData);  // Ajoutez cette ligne pour déboguer

        // Mise à jour du personnel
        const updatedStaff = await StaffService.updateStaff(staffData._id, {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            badgeNumber: formData.badgeNumber,
            service: formData.service,
            userId: staffData.user._id, // Assurez-vous que `staffData.user._id` est défini
        });

        console.log("Personnel mis à jour", updatedStaff);
        alert("Mise à jour réussie !");
        closeForm();
    } catch (error) {
        // Gestion des erreurs avec des détails
        console.error("Erreur lors de la mise à jour :", error.response?.data || error.message);
        alert("Échec de la mise à jour : " + (error.response?.data?.message || error.message));
    }
};


  
  
  
  

  const nextStep = () => setStep((prev) => Math.min(prev + 1, steps.length));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <Page title="Edit Staff">
      <GlobalStyles />
      <Container>
        <AddButton onClick={() => setStep(1)}>+ Edit Staff</AddButton>
      </Container>

      <ModalOverlay>
        <ModalContent as={motion.div} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}>
          <CloseButton onClick={closeForm}>✖</CloseButton>
          <Title>Edit Staff</Title>

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

          <Form onSubmit={handleSubmit}>
            {step === 1 && (
              <>
                <FormTitle>Personal Information</FormTitle>
                <InputRow>
                  <Input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </InputRow>
                <InputRow>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </InputRow>
                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </>
            )}
            {step === 2 && (
              <>
                <FormTitle>Job Information</FormTitle>
                <InputRow>
                  <Input
                    type="text"
                    name="badgeNumber"
                    placeholder="Badge Number"
                    value={formData.badgeNumber}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    type="text"
                    name="service"
                    placeholder="Service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  />
                </InputRow>
              </>
            )}
            {step === 3 && (
              <>
                <FormTitle>Final Submission</FormTitle>
                <p>Review all details before submitting.</p>
              </>
            )}

            <ButtonContainer>
              {step > 1 && <NavButton type="button" onClick={prevStep}>Back</NavButton>}
              {step < steps.length ? (
                <NextButton type="button" onClick={nextStep}>Next →</NextButton>
              ) : (
                <SubmitButton type="submit">Submit</SubmitButton>
              )}
            </ButtonContainer>
          </Form>
        </ModalContent>
      </ModalOverlay>
    </Page>
  );
};


export default EditStaffForm;

