import React, { useState } from "react";
import { GlobalStyles, Container, AddButton, DisabledBackground } from "../styles/PopUpAddPatientFile";
import Page from "layout/Page";
import PatientsFile from "widgets/PatientsFile";
import AddSimplePatientFile from "./addSimplePatientFile";
import { useNavigate } from "react-router-dom";


const PatientFile = () => {
  const [isSimplePopupOpen, setIsSimplePopupOpen] = useState(false);
  const navigate = useNavigate();

  const handleAddPatientClick = () => {
    setIsSimplePopupOpen(true);
  };

  return (
    <Page title="Patients Files">
      <GlobalStyles />
      <Container>
        <AddButton onClick={handleAddPatientClick}>+ Add new PatientFile</AddButton>
      </Container>

      {/* Popup d'ajout du patient simple */}
      <AddSimplePatientFile isOpen={isSimplePopupOpen} onClose={() => setIsSimplePopupOpen(false)} />

      <DisabledBackground isOpen={isSimplePopupOpen}>
        <PatientsFile />
      </DisabledBackground>
    </Page>
  );
};

export default PatientFile;
