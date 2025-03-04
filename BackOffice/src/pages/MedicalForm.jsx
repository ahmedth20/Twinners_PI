import React, { useState } from "react";
import Page from "@layout/Page";
import { Container, Title, SectionTitle,SectionSecondTitle,SectionThirdTitle,Select,Input,TextArea,ButtonContainer,Button,Row,Column,RemoveButton } from "../styles/medicalForm";


const FormSection = ({ title, children }) => (
  <div>
    <SectionTitle>{title}</SectionTitle>
    {children}
  </div>
);

const MedicalForm = () => {
  const [symptoms, setSymptoms] = useState([""]);
  const [medications, setMedications] = useState([{ name: "", dosage: "", frequency: "", duration: "", notes: "" }]);
  const [lifestyleRecommendations, setLifestyleRecommendations] = useState([""]);
  const [allergies, setAllergies] = useState([""]);
  const [operations, setOperations] = useState([{ type: "", estimatedTime: "", date: "", roomNumber: "", status: "" }]);

  // Fonctions pour ajouter des entrées dynamiques
  const addField = (setState) => setState((prev) => [...prev, ""]);
  const addMedication = () => setMedications([...medications, { name: "", dosage: "", frequency: "", duration: "", notes: "" }]);
  const addOperation = () => {
    setOperations([...operations, { type: "", estimatedTime: "", date: "", roomNumber: "", status: "" }]);
  };
  
  const removeOperation = (index) => {
    setOperations(operations.filter((_, i) => i !== index));
  };
  // Fonctions pour supprimer des entrées dynamiques
  const removeField = (setState, index) => setState((prev) => prev.filter((_, i) => i !== index));
  const removeMedication = (index) => setMedications(medications.filter((_, i) => i !== index));

  return (
    <Page title="Medical Record">
      <Container>
        <Title>Medical Record Form</Title>

        {/* User Information */}
        <FormSection title="User Information">
          <Row>
            <Column><Input placeholder="First Name" type="text" /></Column>
            <Column><Input placeholder="Last Name" type="text" /></Column>
          </Row>
          <Row>
            <Column><Input placeholder="Email" type="email" /></Column>
            <Column><Input placeholder="Password" type="password" /></Column>
          </Row>
        </FormSection>

        {/* Patient Information */}
        <FormSection title="Patient Information">
          <Row>
            <Column><Input placeholder="Phone" type="tel" /></Column>
            <Column><Input placeholder="Address" type="text" /></Column>
          </Row>
          <Row>
            <Column><Input placeholder="Age" type="number" /></Column>
            <Column> <Select>
                <option value="">Select Gender</option>
                <option value="Female">Female</option>
                <option value="Female">Male</option>
              </Select>
              </Column>
          </Row>
          <Row>
          <Column><Input placeholder="Height (cm)" type="number" /></Column>

            <Column><Input placeholder="Weight (kg)" type="number" /></Column>
          </Row>
        </FormSection>

        {/* Consultation Details */}
        <FormSection title="Consultation">
          <Row>
             <Select>
                <option value="">Select Doctor</option>
                <option value="Planned">John</option>
              </Select></Row>
          <Row>
            <Column><Input placeholder="Duration (minutes)" type="number" /></Column>
            <Column><Input placeholder="Date" type="date" /></Column>
          </Row>
          <Row>
            <Column>
              <Select>
                <option value="">Select Status</option>
                <option value="Planned">Planned</option>
                <option value="Ongoing">Ongoing</option>
                <option value="Completed">Completed</option>
                <option value="Cancelled">Cancelled</option>
              </Select>
            </Column>
            <Column><TextArea placeholder="Diagnostic (Key: Result)" /></Column>
          </Row>
        </FormSection>

        {/* Medical Record */}
        <FormSection title="Medical Record">
        <SectionSecondTitle>Diagnostics</SectionSecondTitle>

          <Row>
            <Column><Input placeholder="Condition" type="text" /></Column>
            <Column><Input placeholder="Severity" type="text" /></Column>
          </Row>
        
          {symptoms.map((symptom, index) => (
          <div key={index} style={{ display: "flex", alignItems: "center" }}>
            <Input
              type="text"
              placeholder="Symptom"
              value={symptom}
              onChange={(e) => {
                const newSymptoms = [...symptoms];
                newSymptoms[index] = e.target.value;
                setSymptoms(newSymptoms);
              }}
            />
            {index > 0 && <RemoveButton onClick={() => removeField(setSymptoms, index)}>X</RemoveButton>}
          </div>
        ))}
        <ButtonContainer><Button onClick={() => addField(setSymptoms)}>Add Other Symptom</Button></ButtonContainer>
        <SectionSecondTitle>Allergies</SectionSecondTitle>

            <Column><TextArea placeholder="Notes" /></Column>
         
          {allergies.map((allergy, index) => (
          <div key={index} style={{ display: "flex", alignItems: "center" }}>
            <Input
              type="text"
              placeholder="Allergy"
              value={allergy}
              onChange={(e) => {
                const newAllergies = [...allergies];
                newAllergies[index] = e.target.value;
                setAllergies(newAllergies);
              }}
            />
            {index > 0 && <RemoveButton onClick={() => removeField(setAllergies, index)}>X</RemoveButton>}
          </div>
        ))}
        <ButtonContainer><Button onClick={() => addField(setAllergies)}>Add Other Allergy</Button></ButtonContainer>
        </FormSection>

        {/* Treatment */}
          
        <SectionSecondTitle>Treatments</SectionSecondTitle>
        <SectionThirdTitle>Medications</SectionThirdTitle>
          {medications.map((med, index) => (
          <div key={index} style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "8px", marginBottom: "10px" }}>
            <Input type="text" placeholder="Name" value={med.name} onChange={(e) => {
              const newMeds = [...medications];
              newMeds[index].name = e.target.value;
              setMedications(newMeds);
            }} />
            <Input type="text" placeholder="Dosage" value={med.dosage} onChange={(e) => {
              const newMeds = [...medications];
              newMeds[index].dosage = e.target.value;
              setMedications(newMeds);
            }} />
            <Input type="text" placeholder="Frequency" value={med.frequency} onChange={(e) => {
              const newMeds = [...medications];
              newMeds[index].frequency = e.target.value;
              setMedications(newMeds);
            }} />
            <Input type="text" placeholder="Duration" value={med.duration} onChange={(e) => {
              const newMeds = [...medications];
              newMeds[index].duration = e.target.value;
              setMedications(newMeds);
            }} />
            <TextArea placeholder="Notes" value={med.notes} onChange={(e) => {
              const newMeds = [...medications];
              newMeds[index].notes = e.target.value;
              setMedications(newMeds);
            }} />
            {index > 0 && <RemoveButton onClick={() => removeMedication(index)}>Remove</RemoveButton>}
          </div>
        ))}
        <ButtonContainer><Button onClick={addMedication}>Add Other Medication</Button></ButtonContainer>


          <SectionThirdTitle>Procedures</SectionThirdTitle>
          <Row>
            <Column><Input placeholder="Name" type="text" /></Column>
            <Column><Input placeholder="Duration" type="text" /></Column>
          </Row>

          <SectionThirdTitle>Lifestyle Recommendations</SectionThirdTitle>
          {lifestyleRecommendations.map((rec, index) => (
          <div key={index} style={{ display: "flex", alignItems: "center" }}>
            <TextArea
              placeholder="Recommendation"
              value={rec}
              onChange={(e) => {
                const newRecs = [...lifestyleRecommendations];
                newRecs[index] = e.target.value;
                setLifestyleRecommendations(newRecs);
              }}
            />
            {index > 0 && <RemoveButton onClick={() => removeField(setLifestyleRecommendations, index)}>X</RemoveButton>}
          </div>
        ))}
        <ButtonContainer><Button onClick={() => addField(setLifestyleRecommendations)}>Add Other Recommendation</Button></ButtonContainer>

        {/* Test Results & Allergies */}
        <SectionSecondTitle>Test Results</SectionSecondTitle>
        
          <Row>
            <Column><Input placeholder="Chest X-ray" type="text" /></Column>
            <Column><Input placeholder="Blood Test" type="text" /></Column>
          </Row>
          <Column><Input placeholder="Oxygen Saturation" type="text" /></Column>
       
          <SectionSecondTitle>Operations</SectionSecondTitle>
    {operations.map((operation, index) => (
      <div key={index} style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "8px", marginBottom: "10px" }}>
        <Input 
          type="text" 
          placeholder="Type" 
          value={operation.type} 
          onChange={(e) => {
            const newOperations = [...operations];
            newOperations[index].type = e.target.value;
            setOperations(newOperations);
          }} 
        />
        <Input 
          type="number" 
          placeholder="Estimated Time" 
          value={operation.estimatedTime} 
          onChange={(e) => {
            const newOperations = [...operations];
            newOperations[index].estimatedTime = e.target.value;
            setOperations(newOperations);
          }} 
        />
        <Input 
          type="date" 
          placeholder="Date" 
          value={operation.date} 
          onChange={(e) => {
            const newOperations = [...operations];
            newOperations[index].date = e.target.value;
            setOperations(newOperations);
          }} 
        />
        <Input 
          type="number" 
          placeholder="Room Number" 
          value={operation.roomNumber} 
          onChange={(e) => {
            const newOperations = [...operations];
            newOperations[index].roomNumber = e.target.value;
            setOperations(newOperations);
          }} 
        />
        <Select 
          value={operation.status} 
          onChange={(e) => {
            const newOperations = [...operations];
            newOperations[index].status = e.target.value;
            setOperations(newOperations);
          }} 
        >
          <option value="">Select Status</option>
          <option value="scheduled">Scheduled</option>
          <option value="completed">Completed</option>
          <option value="canceled">Canceled</option>
        </Select>
        {index > 0 && <RemoveButton onClick={() => removeOperation(index)}>Remove</RemoveButton>}
      </div>
    ))}
    <ButtonContainer>
      <Button onClick={addOperation}>Add Other Operation</Button>
    </ButtonContainer>
          <ButtonContainer> <Button type="submit">Submit</Button></ButtonContainer>
      </Container>
    </Page>
  );
};

export default MedicalForm;
