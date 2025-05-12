import React, { useState } from "react";
import Page from "layout/Page";
import { useForm } from "react-hook-form";
import {
  Container,
  Title,
  SectionTitle,
  Input,
  Button,
  Row,
} from "../styles/medicalForm";
import axios from "axios";
import { useLocation } from "react-router";

const FormSection = ({ title, children }) => (
  <div>
    <SectionTitle>{title}</SectionTitle>
    {children}
  </div>
);

function Prescriptions() {
  const { state } = useLocation();
  const medicalRecordId = state?.medicalRecord;

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      medications: [{ medication: "", dosageInstruction: "" }],
    },
  });

  const [medications, setMedications] = useState([
    { medication: "", dosageInstruction: "" },
  ]);

  const addMedication = () => {
    setMedications([...medications, { medication: "", dosageInstruction: "" }]);
  };

  const removeMedication = (index) => {
    const newMedications = [...medications];
    newMedications.splice(index, 1);
    setMedications(newMedications);
  };

  const handleMedicationChange = (index, field, value) => {
    const newMedications = [...medications];
    newMedications[index][field] = value;
    setMedications(newMedications);
  };

  const onSubmit = async () => {
    try {
      const prescriptionData = {
        medications,
        medicalRecord: medicalRecordId,
      };

      const response = await axios.post("http://localhost:5000/prescription", prescriptionData);
      alert("✅ Prescription ajoutée avec succès !");
        const prescriptionId = response.data._id; // Récupérer l'ID de la prescription

     
      // 2. Génération du PDF
      const pdfResponse = await axios.get(
        `http://localhost:5000/prescription/pdf/${prescriptionId}`
      );

      if (pdfResponse.data.downloadLink) {
        window.open(pdfResponse.data.downloadLink, "_blank");
      }
      reset();
      setMedications([{ medication: "", dosageInstruction: "" }]);
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message || "Erreur inconnue.";
      alert(`❌ ${errorMessage}`);
    }
  };

  return (
    <Page>
      <Container style={{ width: "100%", margin: "0 auto" }}>
        <Title>Prescription Form</Title>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ width: "100%", maxWidth: "100%", padding: "0 20px" }}
        >
          <FormSection title="Médicaments">
            {medications.map((med, index) => (
              <Row key={index} style={{ display: "flex", gap: "20px", marginBottom: "10px" }}>
                <Input
                  placeholder="Médicament"
                  type="text"
                  value={med.medication}
                  style={{ flex: 1 }}
                  onChange={(e) => handleMedicationChange(index, "medication", e.target.value)}
                  required
                />
                <Input
                  placeholder="Instruction de dosage"
                  type="text"
                  value={med.dosageInstruction}
                  style={{ flex: 1 }}
                  onChange={(e) =>
                    handleMedicationChange(index, "dosageInstruction", e.target.value)
                  }
                  required
                />
                <Button
                  type="button"
                  onClick={() => removeMedication(index)}
                  style={{ backgroundColor: "#d9534f", color: "#fff" }}
                >
                  Supprimer
                </Button>
              </Row>
            ))}
            <Button
              type="button"
              onClick={addMedication}
              style={{ backgroundColor: "#5bc0de", color: "#fff", marginTop: "10px" }}
            >
              Ajouter un médicament
            </Button>
          </FormSection>

          <Button
            type="submit"
            style={{
              backgroundColor: "#5cb85c",
              color: "#fff",
              marginTop: "20px",
              width: "100%",
            }}
          >
            Enregistrer la Prescription
          </Button>
        </form>
      </Container>
    </Page>
  );
}

export default Prescriptions;
