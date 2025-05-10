import React from "react";
import Page from "layout/Page";
import {
  Container, Title, SectionTitle, Row, Column, Input, Select, TextArea
} from "../styles/medicalForm";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Validation Zod
const formSchema = z.object({
  // User Info
  user: z.object({
    username: z.string().min(1, "Username is required"),
    email: z.string().email("Invalid email").min(1, "Email is required"),
    phoneNumber: z.string().min(1, "Phone number is required"),
  }),

  // Patient Info
  patient: z.object({
    dateOfBirth: z.string().min(1, "Date of Birth is required"),
    gender: z.enum(["Male", "Female", "Other"]),
    address: z.string().min(1, "Address is required"),
  }),

  // Patient File Info
  dateIssued: z.string().min(1, "Date is required"),
  description: z.string().optional(),
  symptoms: z.string().min(1, "Symptoms are required"),
  emergencyLevel: z.enum(["low", "moderate", "critical"]).optional(),
  testResults: z.object({
    chestXray: z.string().optional(),
    bloodTest: z.string().optional(),
    oxygenSaturation: z.string().optional(),
  })
});

const MedicalFormWithUserAndPatient = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data) => {
    console.log("🧾 Données envoyées :", data);

    try {
      const generatedMedicalRecord = "Record-" + Math.floor(Math.random() * 10000);
      const generatedReference = Math.floor(Math.random() * 1000000);

      const formattedData = {
        user: {
          username: data.user.username,
          email: data.user.email,
          phoneNumber: data.user.phoneNumber,
        },
        patient: {
          dateOfBirth: data.patient.dateOfBirth,
          gender: data.patient.gender,
          address: data.patient.address,
        },
        reference: generatedReference,
        dateIssued: data.dateIssued,
        description: data.description,
        symptoms: data.symptoms,
        emergencyLevel: data.emergencyLevel,
        medicalRecord: generatedMedicalRecord,
        testResults: data.testResults
      };

      console.log("Données formatées pour l'API :", formattedData);

      const response = await fetch("http://localhost:5000/patient", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formattedData),
      });

      if (response.ok) {
        const result = await response.json();
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

        {/* User Information */}
        <FormSection title="User Information">
          <Row>
            <Column>
              <Input {...register("user.username")} placeholder="Username" />
              {errors.user?.username && <p>{errors.user.username.message}</p>}
            </Column>
            <Column>
              <Input {...register("user.email")} placeholder="Email" type="email" />
              {errors.user?.email && <p>{errors.user.email.message}</p>}
            </Column>
          </Row>
          <Row>
            <Column>
              <Input {...register("user.phoneNumber")} placeholder="Phone Number" />
              {errors.user?.phoneNumber && <p>{errors.user.phoneNumber.message}</p>}
            </Column>
          </Row>
        </FormSection>

        {/* Patient Information */}
        <FormSection title="Patient Information">
          <Row>
            <Column>
              <Input {...register("patient.dateOfBirth")} placeholder="Date of Birth" type="date" />
              {errors.patient?.dateOfBirth && <p>{errors.patient.dateOfBirth.message}</p>}
            </Column>
            <Column>
              <Select {...register("patient.gender")}>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </Select>
              {errors.patient?.gender && <p>{errors.patient.gender.message}</p>}
            </Column>
          </Row>
          <Row>
            <Column>
              <Input {...register("patient.address")} placeholder="Address" />
              {errors.patient?.address && <p>{errors.patient.address.message}</p>}
            </Column>
          </Row>
        </FormSection>

        {/* Patient File Information */}
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

        {/* Test Results */}
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

        <button type="submit" onClick={handleSubmit(onSubmit)}>Submit</button>
      </Container>
    </Page>
  );
};

export default MedicalFormWithUserAndPatient;
