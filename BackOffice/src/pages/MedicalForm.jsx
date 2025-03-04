import React from "react";
import styled from "styled-components";
import Page from "@layout/Page";

const Container = styled.div`
  border-radius: 15px;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 40px;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  color: #414d55;
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

const FormSection = styled.div`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h3`
  font-weight: bold;
  color: #2c61e2;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  border-bottom: 2px solid rgba(57, 57, 57, 0.62);
  background: transparent;
  font-size: 16px;
  outline: none;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const Column = styled.div`
  flex: 1;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 2px solid rgba(57, 57, 57, 0.62);
  background: transparent;
  font-size: 16px;
  outline: none;
  min-height: 100px;
`;

const Button = styled.button`
  padding: 12px 20px;
  border: none;
  background: #2c61e2;
  color: white;
  font-size: 18px;
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;
  float: right;
  &:hover {
    background: rgb(20, 60, 160);
  }
`;

const MedicalForm = () => {
  return (
    <Page title="Medical Record">
      <Container>
        <Header>
          <Title>MEDICAL FORM</Title>
        </Header>
        
        {/* User Information */}
        <FormSection>
          <SectionTitle>User Information</SectionTitle>
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
        <FormSection>
          <SectionTitle>Patient Information</SectionTitle>
          <Row>
            <Column><Input placeholder="Phone" type="tel" /></Column>
            <Column><Input placeholder="Address" type="text" /></Column>
          </Row>
          <Row>
            <Column><Input placeholder="Age" type="number" /></Column>
            <Column><Input placeholder="Height (cm)" type="number" /></Column>
          </Row>
          <Row>
            <Column><Input placeholder="Weight (kg)" type="number" /></Column>
          </Row>
        </FormSection>
        
        {/* Consultation Details */}
        <FormSection>
          <SectionTitle>Consultation</SectionTitle>
          <Row>
            <Column><Input placeholder="Duration (minutes)" type="number" /></Column>
            <Column><Input placeholder="Date" type="date" /></Column>
          </Row>
          <Input placeholder="Status (Planned, Ongoing, Completed, Cancelled)" type="text" />
          <TextArea placeholder="Diagnostic (Key: Result)" />
        </FormSection>
        
        {/* Medical Record */}
        <FormSection>
          <SectionTitle>Medical Record</SectionTitle>
          <Input placeholder="Condition" type="text" />
          <TextArea placeholder="Symptoms" />
          <Input placeholder="Severity" type="text" />
          <TextArea placeholder="Notes" />
        </FormSection>

        {/* Treatment */}
        <FormSection>
          <SectionTitle>Treatment</SectionTitle>
          <TextArea placeholder="Medications (Name, Dosage, Frequency, Duration, Notes)" />
          <TextArea placeholder="Procedures (Name, Duration)" />
          <TextArea placeholder="Lifestyle Recommendations" />
        </FormSection>
        
        {/* Test Results & Allergies */}
        <FormSection>
          <SectionTitle>Test Results</SectionTitle>
          <Row>
            <Column><Input placeholder="Chest X-ray" type="text" /></Column>
            <Column><Input placeholder="Blood Test" type="text" /></Column>
          </Row>
          <Input placeholder="Oxygen Saturation" type="text" />
          <TextArea placeholder="Allergies" />
        </FormSection>
        
        <Button type="submit">Submit</Button>
      </Container>
    </Page>
  );
};

export default MedicalForm;
