import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Page from "layout/Page";
import DoctorsList from "widgets/DoctorsList";
import AddSimpleDoctorPopup from "./AddSimpleDoctorPopup";

import { GlobalStyles, Container, AddButton, DisabledBackground } from "../styles/PopUpAddDoctor";

import { ModalOverlay, ModalContent, CloseButton, ButtonGroup, ModalButton } from "../styles/PopUpAddDoctor";

const Doctors = () => {
  const [isTypePopupOpen, setIsTypePopupOpen] = useState(false);
  const [isSimplePopupOpen, setIsSimplePopupOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null); // Store the doctor to edit


  const handleSimpleDoctor = () => {
    setIsTypePopupOpen(false);
    setSelectedDoctor(null); // Reset to avoid pre-filling fields on creation
    setIsSimplePopupOpen(true);
  };

  const handleEditDoctor = (doctor) => {
    setSelectedDoctor(doctor); // Store the selected doctor
    setIsSimplePopupOpen(true); // Open the popup in edit mode
  };

  return (
    <Page title="Doctors List">
      <GlobalStyles />
      <Container>
        <AddButton onClick={() => setIsTypePopupOpen(true)}>+ Add new Doctor</AddButton>
      </Container>

      {/* Popup to choose doctor type */}
      {isTypePopupOpen && (
        <ModalOverlay>
          <ModalContent>
            <CloseButton onClick={() => setIsTypePopupOpen(false)}>✖</CloseButton>
            <h2>Choose Doctor Type</h2>
            <ButtonGroup>
              <ModalButton variant="simple" onClick={handleSimpleDoctor}>
                Simple Doctor
              </ModalButton>
            </ButtonGroup>
          </ModalContent>
        </ModalOverlay>
      )}

      {/* Popup for adding/editing a simple doctor */}
      <AddSimpleDoctorPopup
        isOpen={isSimplePopupOpen}
        onClose={() => setIsSimplePopupOpen(false)}
        doctorData={selectedDoctor} // Pass the selected doctor's info
      />

      {/* Disable background when popups are open */}
      <DisabledBackground isOpen={isSimplePopupOpen || isTypePopupOpen}>
        <DoctorsList variant="doctor" onEditDoctor={handleEditDoctor} /> {/* Pass the function to DoctorsList */}
      </DisabledBackground>
    </Page>
  );
};

export default Doctors;