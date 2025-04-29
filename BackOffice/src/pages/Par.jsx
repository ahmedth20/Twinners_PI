import React, { useState } from "react";
import { motion } from "framer-motion";
import Page from "@layout/Page";
import StaffList from "@widgets/Parlist";
import { 
  GlobalStyles, Input, DisabledBackground, Form, ButtonContainer, 
  ModalContent, ModalOverlay, CloseButton, Title, InputRow, 
  Container, AddButton, SubmitButton, FormTitle 
} from "../styles/PopUpAddStaff";
import StaffService from "../services/ParamedicService";

const Paramedcs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    function: "",
    ambulance: "",
    patientsFile: "",
    user: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddStaff = async (e) => {
    e.preventDefault();
    console.log("📤 Données envoyées :", formData);

    try {
      await StaffService.createParamedic(formData);
      alert("✅ Staff ajouté avec succès !");
      setFormData({ function: "", ambulance: "", patientsFile: "", user: "" });
      setIsOpen(false);
      window.location.reload();
    } catch (error) {
      console.error("❌ Erreur lors de l'ajout du staff :", error.response?.data || error);
    }
  };

  return (
    <Page title="Paramedics List">
      <GlobalStyles />
      <Container>
        <AddButton onClick={() => setIsOpen(true)}>+ Add new Paramedic</AddButton>
      </Container>

      {isOpen && (
        <ModalOverlay>
          <ModalContent as={motion.div} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}>
            <CloseButton onClick={() => setIsOpen(false)}>✖</CloseButton>
            <Title>Add NEW Paramedic</Title>

            <Form onSubmit={handleAddStaff}>
              <FormTitle>paramedic Information</FormTitle>

              <InputRow>
                <Input type="text" name="function" placeholder="Service Paramedic ID" value={formData.function} onChange={handleChange}  />
              </InputRow>

              <InputRow>
                <Input type="text" name="ambulance" placeholder="Ambulance ID" value={formData.ambulance} onChange={handleChange} required />
              </InputRow>

              <InputRow>
                <Input type="text" name="patientsFile" placeholder="Patients File ID" value={formData.patientsFile} onChange={handleChange} required />
              </InputRow>

              <InputRow>
                <Input type="text" name="user" placeholder="User ID" value={formData.user} onChange={handleChange} required />
              </InputRow>

              <ButtonContainer>
                <SubmitButton type="submit">Submit</SubmitButton>
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

export default Paramedcs;
