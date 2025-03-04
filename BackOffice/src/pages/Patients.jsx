import React, { useState } from "react";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import Page from "@layout/Page";
import PatientsList from "@widgets/PatientsList";
import { 
  GlobalStyles, Input, DisabledBackground, Form, ButtonContainer, 
  Line, ProgressBar, NavButton, NextButton, SubmitButton, Container, 
  AddButton, ModalContent, ModalOverlay, CloseButton, Title, StepContainer, Step, 
  InputRow, ButtonRow, Select, RadioGroup, RadioButton,FormTitle
} from "../styles/PopUpAddPatient";
import PatientService from "../services/PatientService";


const steps = [
  { number: 1, label: "Personal Information" },
  { number: 2, label: "Medical Information" },
  { number: 3, label: "Consultation Information" },
  { number: 4, label: "Medical Record & Final Submission" }
];

const Patients = () => {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    sex: "",
    age: "",
    phone: "",
    address: "",
    allergies: "",
    existingConditions: "",
    symptoms: "",
    medications: "",
    consultationReference: "",
    doctor: "",
    date: "",
    duration: "",
    status: "",
    medicalRecordReference: "",
    diagnosticDetails: "",
    testResults: "",
    treatments: ""
  });
  const handleAddPatient = async () => {
    try {
      const requestData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email, // Ajout de l'email pour User
        password: formData.password, // Ajout du password pour User
        sex: formData.sex,
        age: formData.age,
        phone: formData.phone,
        address: formData.address,
        medicalRecord: {
          reference: formData.medicalRecordReference,
          diagnostic: {
            details: formData.diagnosticDetails,
            severity:formData.diagnosticSeverity,
            condition:formData.diagnosticCondition
          },
          testResults: formData.testResults,
          treatments: formData.treatments
        },
        consultations: [
          {
            reference: formData.consultationReference,
            doctor: formData.doctor,
            date: formData.date,
            duration: formData.duration,
            status: formData.status
          }
        ]
      };
  
      console.log("Données envoyées :", JSON.stringify(requestData, null, 2)); // Vérifier les données envoyées
  
      const response = await PatientService.createPatient(requestData);
      console.log("Patient ajouté avec succès :", response);
      alert("Patient ajouté avec succès !");
      setIsOpen(false);
    } catch (error) {
      console.error("Erreur lors de l'ajout du patient :", error);
      console.log("Détails de l'erreur :", error.response?.data); // Afficher les détails de l'erreur backend
      alert("Erreur lors de l'ajout du patient.");
    }
  };
  
  
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, steps.length));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <Page title="Patients List">
      <GlobalStyles />
      <Container>
        <AddButton onClick={() => setIsOpen(true)}>+ Add new Patient</AddButton>
      </Container>
  
      {isOpen && (
        <ModalOverlay>
          <ModalContent as={motion.div} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}>
            <CloseButton onClick={() => setIsOpen(false)}>✖</CloseButton>
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
  
            <Form>
              {step === 1 && (
                <>
                  <FormTitle>Personal Information</FormTitle>
                  <InputRow>
                    <Input type="text" name="firstName" placeholder="First Name" onChange={handleChange} />
                    <Input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} />
                  </InputRow>
                  <InputRow>
                  <Select name="sex" onChange={handleChange}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>            
                  </Select> 
                   <Input type="text" name="email" placeholder="Email" onChange={handleChange} />
                  </InputRow>
                 
                  <InputRow>
                    <Input type="number" name="age" placeholder="Age" onChange={handleChange} />
                    <Input type="text" name="phone" placeholder="Phone" onChange={handleChange} />
                  </InputRow>
                  <Input type="text" name="address" placeholder="Address" onChange={handleChange} />
                  <Input type="text" name="password" placeholder="Password" onChange={handleChange} />

                </>
              )}
              {step === 2 && (
                <>
                  <FormTitle>Medical Information</FormTitle>
                  <InputRow>
                    <Input type="text" name="allergies" placeholder="Allergies" onChange={handleChange} />
                    <Input type="text" name="existingConditions" placeholder="Existing Conditions" onChange={handleChange} />
                  </InputRow>
                  <Input type="text" name="symptoms" placeholder="Symptoms" onChange={handleChange} />
                  <Input type="text" name="medications" placeholder="Medications" onChange={handleChange} />
                </>
              )}
              {step === 3 && (
                <>
                  <FormTitle>Consultation Information</FormTitle>
                  <Input type="text" name="consultationReference" placeholder="Consultation Reference" onChange={handleChange} />
                  <InputRow>
                    <Input type="text" name="doctor" placeholder="Doctor" onChange={handleChange} />
                    <Input type="date" name="date" onChange={handleChange} />
                  </InputRow>
                  <Input type="text" name="duration" placeholder="Duration" onChange={handleChange} />
                
                  <Select name="status" onChange={handleChange}>
                    <option value="Planned">Planned</option>
                    <option value="Ongoing">Ongoing</option>
                    <option value="Completed">Completed</option>
                    <option value="Cancelled">Cancelled</option>
                  </Select>
                </>
              )}
              {step === 4 && (
                <>
                  <FormTitle>Medical Record & Final Submission</FormTitle>
                  <Input type="text" name="medicalRecordReference" placeholder="Medical Record Reference" onChange={handleChange} />
                  <InputRow>
                    <Input type="text" name="diagnosticDetails" placeholder="Diagnostic Details" onChange={handleChange} />
                    <Input type="text" name="testResults" placeholder="Test Results" onChange={handleChange} />
                  </InputRow>
                  <InputRow>
                    <Input type="text" name="diagnosticSeverity" placeholder="Diagnostic Severity" onChange={handleChange} />
                    <Input type="text" name="diagnosticCondition" placeholder="Diagnostic Condition" onChange={handleChange} />
                  </InputRow>
                  <Input type="text" name="treatments" placeholder="Treatments" onChange={handleChange} />
                </>
              )}
            </Form>
  
            <ButtonContainer>
              {step > 1 && <NavButton onClick={prevStep}>Back</NavButton>}
              {step < steps.length ? (
                <NextButton style={step === 1 ? { marginLeft: "auto" } : {}} onClick={nextStep}>Next →</NextButton>
              ) : (
                <SubmitButton onClick={handleAddPatient}>Submit</SubmitButton>

              )}
            </ButtonContainer>
          </ModalContent>
        </ModalOverlay>
      )}
  
      <DisabledBackground isOpen={isOpen}>
        <PatientsList />
      </DisabledBackground>
    </Page>
  );
};

export default Patients;
