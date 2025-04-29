import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Page from "@layout/Page";
import ParamedicService from "../services/ParamedicService";
import {
  GlobalStyles, Input, Form, ButtonContainer,
  ModalContent, ModalOverlay, CloseButton, Title,
  InputRow, SubmitButton, Container, AddButton, FormTitle
} from "../styles/PopUpAddStaff";

const EditParamedicForm = ({ paramedicData, closeForm }) => {
  const [formData, setFormData] = useState({
    function: '',
    ambulance: '',
    patientsFile: '',
    user: ''
  });

  // Synchroniser avec les données passées en props
  useEffect(() => {
    if (paramedicData) {
      setFormData({
        function: paramedicData.function || '',
        ambulance: paramedicData.ambulance || '',
        patientsFile: paramedicData.patientsFile || '',
        user: paramedicData.user?._id || ''
      });
    }
  }, [paramedicData]);

  // Gérer les changements d'input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Vérifier si tous les champs sont remplis
    if (!formData.function || !formData.ambulance || !formData.patientsFile || !formData.user) {
      alert("Tous les champs sont requis.");
      return;
    }

    try {
      if (!paramedicData?._id) {
        alert("ID du paramedic manquant !");
        return;
      }

      const updated = await ParamedicService.updateParamedic(paramedicData._id, {
        function: formData.function,
        ambulance: formData.ambulance,
        patientsFile: formData.patientsFile,
        user: formData.user
      });

      console.log("Paramedic mis à jour :", updated);
      alert("Mise à jour réussie !");
      closeForm();
      window.location.reload(); // Recharger la page pour appliquer les changements
    } catch (error) {
      console.error("Erreur lors de la mise à jour :", error.response?.data || error.message);
      alert("Échec de la mise à jour : " + (error.response?.data?.message || error.message));
    }
  };

  return (
    <Page title="Edit Paramedic">
      <GlobalStyles />
      <Container>
        <AddButton onClick={() => {}}>+ Edit Paramedic</AddButton>
      </Container>

      <ModalOverlay>
        <ModalContent as={motion.div} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}>
          <CloseButton onClick={closeForm}>✖</CloseButton>
          <Title>Edit Paramedic</Title>

          <Form onSubmit={handleSubmit}>
            <FormTitle>Paramedic Details</FormTitle>

            <InputRow>
              <Input
                type="text"
                name="function"
                placeholder="Function"
                value={formData.function}
                onChange={handleChange}
                required
              />
              <Input
                type="text"
                name="ambulance"
                placeholder="Ambulance ID"
                value={formData.ambulance}
                onChange={handleChange}
                required
              />
            </InputRow>

            <InputRow>
              <Input
                type="text"
                name="patientsFile"
                placeholder="Patients File ID"
                value={formData.patientsFile}
                onChange={handleChange}
                required
              />
              <Input
                type="text"
                name="user"
                placeholder="User ID"
                value={formData.user}
                onChange={handleChange}
                required
                disabled
              />
            </InputRow>

            <ButtonContainer>
              <SubmitButton type="submit">Save Changes</SubmitButton>
            </ButtonContainer>
          </Form>
        </ModalContent>
      </ModalOverlay>
    </Page>
  );
};

export default EditParamedicForm;
