import React, { useState } from "react";
import { motion } from "framer-motion";
import Page from "layout/Page";
import StaffList from "widgets/StaffList";
import { 
  GlobalStyles, Input, DisabledBackground, Form, ButtonContainer, 
  Line, ProgressBar, NavButton, NextButton, SubmitButton, Container, 
  AddButton, ModalContent, ModalOverlay, CloseButton, Title, StepContainer, Step, 
  InputRow, FormTitle
} from "../styles/PopUpAddStaff";
import StaffService from "../services/StaffService";

const steps = [
  { number: 1, label: "Personal Information" },
  { number: 2, label: "Job Information" },
  { number: 3, label: "Final Submission" }
];

const Staff = () => {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    badgeNumber: "",
    service: ""
  });
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleAddStaff = async (e) => {
    e.preventDefault();
  
    console.log("📤 Données envoyées :", formData);
  
    try {
      await StaffService.createStaff(formData);
      alert("✅ Staff ajouté avec succès !");
      
      // Réinitialiser le formulaire et fermer la modale
      setFormData({ firstName: "", lastName: "", email: "", password: "", badgeNumber: "", service: "" });
      setIsOpen(false);
      window.location.reload();
    } catch (error) {
      console.error("❌ Erreur lors de l'ajout du staff :", error.response?.data || error);
    }
  };
  
  const nextStep = () => setStep((prev) => Math.min(prev + 1, steps.length));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <Page title="Staff List">
      <GlobalStyles />
      <Container>
        <AddButton onClick={() => setIsOpen(true)}>+ Add new Staff</AddButton>
      </Container>

      {isOpen && (
        <ModalOverlay>
          <ModalContent as={motion.div} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}>
            <CloseButton onClick={() => setIsOpen(false)}>✖</CloseButton>
            <Title>Add NEW Staff</Title>
            
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

            <Form onSubmit={handleAddStaff}>
              {step === 1 && (
                <>
                  <FormTitle>Personal Information</FormTitle>
                  <InputRow>
                    <Input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
                    <Input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
                  </InputRow>
                  <InputRow>
                    <Input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                  </InputRow>
                  <Input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
                </>
              )}
              {step === 2 && (
                <>
                  <FormTitle>Job Information</FormTitle>
                  <InputRow>
                    <Input type="text" name="badgeNumber" placeholder="Badge Number" value={formData.badgeNumber} onChange={handleChange} required />
                    <Input type="text" name="service" placeholder="Service" value={formData.service} onChange={handleChange} required />
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
                  <NextButton type="button" style={step === 1 ? { marginLeft: "auto" } : {}} onClick={nextStep}>Next →</NextButton>
                ) : (
                  <SubmitButton type="submit">Submit</SubmitButton>
                )}
              </ButtonContainer>
            </Form>
          </ModalContent>
        </ModalOverlay>
      )}

      <DisabledBackground isOpen={isOpen}>
        <StaffList />
      </DisabledBackground>
    </Page>
  );
};

export default Staff;
