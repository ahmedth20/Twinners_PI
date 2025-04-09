import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import Page from "layout/Page";
import ParamedicList from "widgets/ParamedicList";
import { 
  GlobalStyles, Input, DisabledBackground, Form, ButtonContainer, 
  Line, ProgressBar, NavButton, NextButton, SubmitButton, Container, 
  AddButton, ModalContent, ModalOverlay, CloseButton, Title, StepContainer, Step, 
  InputRow, FormTitle
} from "../styles/PopUpAddParamedic";
import ParamedicService from "../services/ParamedicService";

const steps = [
  { number: 1, label: "Job Information" },
  { number: 2, label: "Final Submission" }
];

const Paramedics = () => { 
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    serviceParamedic: "", 
    ambulance: "", 
    patientsFile: "", 
    user: "", 
  });

  useEffect(() => {
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddParamedic = async (e) => {
    e.preventDefault();

    const patientsFileArray = formData.patientsFile.split(',').map(id => id.trim()).filter(id => id);
    const dataToSubmit = {
      serviceParamedic: formData.serviceParamedic,
      ambulance: formData.ambulance,
      patientsFile: patientsFileArray, 
      user: formData.user 
    };

    console.log("📤 Données envoyées :", dataToSubmit);

    try {
      await ParamedicService.createParamedic(dataToSubmit);
      alert("✅ Paramedic ajouté avec succès !");

      setFormData({ serviceParamedic: "", ambulance: "", patientsFile: "", user: "" });
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
      </Container>

 

  
        <ParamedicList />
    </Page>
  );
};

export default Paramedics;