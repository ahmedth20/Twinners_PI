import React, { useState } from "react";
import { GlobalStyles, Container, AddButton, DisabledBackground } from "../styles/PopUpAddPatient";
import Page from "layout/Page";
import PatientsList from "widgets/PatientsList";
import AddSimplePatientPopup from "./AddSimplePatientPopup";
import { ModalOverlay, ModalContent, CloseButton, ButtonGroup, ModalButton } from "../styles/PopUpAddPatient";
import { useNavigate } from "react-router-dom";

const Patients = () => {
  const [isTypePopupOpen, setIsTypePopupOpen] = useState(false);
  const [isSimplePopupOpen, setIsSimplePopupOpen] = useState(false);
  const navigate = useNavigate();

  const handleSimplePatient = () => {
    setIsTypePopupOpen(false);
    setIsSimplePopupOpen(true);
  };

  const handleMedicalPatient = () => {
    setIsTypePopupOpen(false);
    navigate("/MedicalFormWithUserAndPatient"); // Redirection vers la page avec le formulaire médical
  };

  return (
    <Page title="Patients List">
      <GlobalStyles />
      <Container>
        <AddButton onClick={() => setIsTypePopupOpen(true)}>+ Add new Patient</AddButton>
      </Container>

      {/* Popup pour choisir le type de patient */}
      {isTypePopupOpen && (
        <ModalOverlay>
          <ModalContent>
            <CloseButton onClick={() => setIsTypePopupOpen(false)}>✖</CloseButton>
            <h2>Choose Patient Type</h2>
            <ButtonGroup>
              <ModalButton variant="simple" onClick={handleSimplePatient}>Simple Patient</ModalButton>
             <ModalButton variant="medical" onClick={handleMedicalPatient}>Patient with Medical Record</ModalButton> 
              {/*
<ModalButton variant="medical" onClick={handleMedicalPatient}>
  Patient with Medical Record
</ModalButton>
*/}
            </ButtonGroup>
          </ModalContent>
        </ModalOverlay>
      )}

      {/* Popup d'ajout du patient simple */}
      <AddSimplePatientPopup isOpen={isSimplePopupOpen} onClose={() => setIsSimplePopupOpen(false)} />

      <DisabledBackground isOpen={isSimplePopupOpen || isTypePopupOpen}>
        <PatientsList />
      </DisabledBackground>
    </Page>
  );
};

export default Patients;
