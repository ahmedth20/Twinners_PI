import React, { useState } from "react";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import Page from "layout/Page";
import ParamedicList from "widgets/ParamedicList";
import { 
  GlobalStyles, Input, DisabledBackground, Form, ButtonContainer, 
  Line, ProgressBar, NavButton, NextButton, SubmitButton, Container, 
  AddButton, ModalContent, ModalOverlay, CloseButton, Title, StepContainer, Step, 
  InputRow, ButtonRow, Select, FormTitle
} from "../styles/PopUpAddParamedic";
import ParamedicService from "../services/ParamedicService";

const steps = [
  { number: 1, label: "Personal Information" },
  { number: 2, label: "Job Information" },
  { number: 3, label: "Final Submission" }
];

const paramedics = () => {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    serviceParamedic: "",
    ambulance: "",
    patientsFile: "",
  });
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleAddParamedic = async (e) => {
    e.preventDefault();
  
    console.log("📤 Données envoyées :", formData);
  
    try {
      await ParamedicService.createParamedic(formData);
      alert("✅ Paramedic ajouté avec succès !");
      
      // Réinitialiser le formulaire et fermer la modale
      setFormData({ firstName: "", lastName: "", email: "", password: "", serviceParamedic: "", ambulance: "", patientsFile: "" });
      setIsOpen(false);
      
    } catch (error) {
      console.error("❌ Erreur lors de l'ajout du Paramedic :", error.response?.data || error);
    }
  };
  
  const nextStep = () => setStep((prev) => Math.min(prev + 1, steps.length));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <Page title="Paramedic List">
      <GlobalStyles />
      <Container>
        <AddButton onClick={() => setIsOpen(true)}>+ Add new Paramedic</AddButton>
      </Container>

      {isOpen && (
        <ModalOverlay>
          <ModalContent as={motion.div} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}>
            <CloseButton onClick={() => setIsOpen(false)}>✖</CloseButton>
            <Title>Add NEW Paramedic</Title>
            
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

            <Form onSubmit={handleAddParamedic}>
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
                    <Input type="text" name="serviceParamedic" placeholder="serviceParamedic" value={formData.serviceParamedic} onChange={handleChange} required />
                    <Input type="text" name="ambulance" placeholder="ambulance" value={formData.ambulance} onChange={handleChange} required />
                    <Input type="text" name="patientsFile" placeholder="patientsFile" value={formData.patientsFile} onChange={handleChange} required />

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
        <ParamedicList />
      </DisabledBackground>
    </Page>
  );
};

export default paramedics;
