import React from "react";
import Page from "layout/Page";
import {
  Container, Title, SectionTitle, Row, Column, Input, Select, TextArea,Button
} from "../styles/medicalForm";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  dateOfBirth: z.string().min(1, "Date of Birth is required"),
  gender: z.enum(["Male", "Female", "Other"]),
  address: z.string().min(1, "Address is required"),
  dateIssued: z.string().min(1, "Date is required"),
  description: z.string().optional(),
  symptoms: z.string().min(1, "Symptoms are required"),
  emergencyLevel: z.enum(["low", "moderate", "critical"]).optional(),
  testResults: z.object({
    chestXray: z.string().optional(),
    bloodTest: z.string().optional(),
    oxygenSaturation: z.string().optional(),
  }).optional(),
});

const MedicalFormWithUserAndPatient = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(formSchema),
  });

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const formattedData = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      sex: data.gender,
      age: new Date().getFullYear() - new Date(data.dateOfBirth).getFullYear(),
      phone: data.phone,
      address: data.address,
      dateIssued: data.dateIssued,
      symptoms: data.symptoms,
      emergencyLevel: data.emergencyLevel,
      description: data.description,
      testResults: {
        chestXray: data.testResults?.chestXray,
        bloodTest: data.testResults?.bloodTest,
        oxygenSaturation: data.testResults?.oxygenSaturation,
      },
    };

    try {
      const response = await fetch("http://localhost:5000/patient/createSimplePatient1", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formattedData),
      });

      if (response.ok) {
        const result = await response.json();
        navigate("/patients");
        console.log("✅ Patient with file created:", result);
      } else {
        const errorText = await response.text();
        console.error("❌ Failed to create patient:", errorText);
      }
    } catch (error) {
      console.error("❌ Network or server error:", error);
    }
  };

  const FormSection = ({ title, children }) => (
    <div>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </div>
  );

  return (
    <Page title="Medical Form">
      <Container>
        <Title>Medical Form</Title>

        <FormSection title="User Information">
          <Row>
            <Column>
              <Input {...register("firstName")} placeholder="First Name" />
              {errors.firstName && <p>{errors.firstName.message}</p>}
            </Column>
            <Column>
              <Input {...register("lastName")} placeholder="Last Name" />
              {errors.lastName && <p>{errors.lastName.message}</p>}
            </Column>
          </Row>
          <Row>
            <Column>
              <Input {...register("email")} placeholder="Email" type="email" />
              {errors.email && <p>{errors.email.message}</p>}
            </Column>
          </Row>
        </FormSection>

        <FormSection title="Patient Information">
          <Row>
            <Column>
              <Input {...register("dateOfBirth")} placeholder="Date of Birth" type="date" />
              {errors.dateOfBirth && <p>{errors.dateOfBirth.message}</p>}
            </Column>
            <Column>
              <Select {...register("gender")}>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </Select>
              {errors.gender && <p>{errors.gender.message}</p>}
            </Column>
          </Row>
          <Row>
            <Column>
              <Input {...register("address")} placeholder="Address" />
              {errors.address && <p>{errors.address.message}</p>}
            </Column>
          </Row>
        </FormSection>

        <FormSection title="Patient File Information">
          <Row>
            <Column>
              <Input {...register("dateIssued")} placeholder="Date Issued" type="date" />
              {errors.dateIssued && <p>{errors.dateIssued.message}</p>}
            </Column>
            <Column>
              <TextArea {...register("description")} placeholder="Description" />
              {errors.description && <p>{errors.description.message}</p>}
            </Column>
          </Row>
          <Row>
            <Column>
              <Input {...register("symptoms")} placeholder="Symptoms" />
              {errors.symptoms && <p>{errors.symptoms.message}</p>}
            </Column>
            <Column>
              <Select {...register("emergencyLevel")}>
                <option value="">Emergency Level</option>
                <option value="low">Low</option>
                <option value="moderate">Moderate</option>
                <option value="critical">Critical</option>
              </Select>
              {errors.emergencyLevel && <p>{errors.emergencyLevel.message}</p>}
            </Column>
          </Row>
        </FormSection>

        <FormSection title="Test Results">
          <Row>
            <Column>
              <Input {...register("testResults.chestXray")} placeholder="Chest X-ray" />
            </Column>
            <Column>
              <Input {...register("testResults.bloodTest")} placeholder="Blood Test" />
            </Column>
          </Row>
          <Row>
            <Column>
              <Input {...register("testResults.oxygenSaturation")} placeholder="Oxygen Saturation" />
            </Column>
          </Row>
        </FormSection>

        <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
      </Container>
    </Page>
  );
};

export default MedicalFormWithUserAndPatient;

